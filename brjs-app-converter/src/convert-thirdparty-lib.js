const { join } = require("path");

const { readdirSync, readFileSync, writeFileSync } = require("fs-extra");
const { safeLoad } = require("js-yaml");

const { compiledThirdpartyJSONTemplate } = require("./converter-data");

// Returns the libraries dependencies as require statements. This way when
// webpack loads the combined library files it also loads the library's
// dependencies.
function getLibraryDependencyRequires(manifestDependencies) {
  if (manifestDependencies) {
    return manifestDependencies
      .split(",")
      .map(dependentPackage => `require("${dependentPackage.trim()}");\n`)
      .join("");
  }

  return "";
}

// Returns the JS files that should be combined to generate the thirdparty JS
// bundle. They don't have to be declared in the manifest file, if none are
// declared in the manifest then BR would load any JS files in the directory.
function getPackageJSFiles(packageDirectory, manifestJSFiles) {
  if (manifestJSFiles) {
    return manifestJSFiles.split(",");
  }

  const packageContents = readdirSync(packageDirectory);
  const isJSFile = packageContentsFileName =>
    packageContentsFileName.match(/.js$/);

  return packageContents.filter(isJSFile);
}

// Inline the library's source files into the combined thirdparty bundle to
// replicate what BRJS does when requiring thridparty libraries.
function getLibrarySource(packageDirectory, manifestJSFiles) {
  const packageJSFileNames = getPackageJSFiles(
    packageDirectory,
    manifestJSFiles
  );
  const readRequiredJSFileSource = requiredJSFileName =>
    readFileSync(join(packageDirectory, requiredJSFileName.trim()));

  return packageJSFileNames.map(readRequiredJSFileSource).join("\n\n\n");
}

function getLibraryModuleExports(manifestExports) {
  // Certain thirdparty libraries contain UMD boilerplate which checks if
  // `module` exists and exports library values using `module.exports` instead
  // of putting it on the global/window object.
  const exportsExist =
    '(Object.keys(module.exports).length || typeof module.exports === "function")';
  const moduleExports = `module.exports = ${exportsExist} ? module.exports : ${manifestExports};`;

  return `\nif (typeof module !== "undefined") ${moduleExports}\n`;
}

function getLibraryWindowExports(packageName, manifestExports) {
  const safePackageExports = packageName.replace(/-/g, "_");
  let windowExports = "";

  // If the library specifies an `exports` export that value to the `window`.
  // This isn't done in BRJS because it doesn't wrap thirdparty libraries in
  // IIFEs like webpack does, which means variables declared in those libraries
  // can leak to the global scope but in webpack they don't so we must explictly
  // export them to the global/window.
  if (manifestExports && manifestExports !== "{}") {
    const windowExport = `(typeof module !== "undefined" && module.exports) || ${manifestExports};\n`;

    windowExports += `\nwindow.${manifestExports} = ${windowExport}`;
  }

  // If the `exports` value differs to the package name export that too. BRJS
  // would export the module exports to the `window` at the bottom of the
  // thirdparty JS bundle for the library. The export identifier used by BRJS is
  // the package name.
  if (safePackageExports !== manifestExports) {
    // `module` might be nulled down by webpack configuration so check if it
    // exists.
    const packageRequire = `typeof module !== "undefined" && module.exports;\n`;

    windowExports += `\nwindow.${safePackageExports} = ${packageRequire}`;
  }

  return windowExports;
}

// Convert BRJS thirdparty lib to npm package. It bundles the library files into
// a single file to emulate what BRJS would inject into its JS bundle. We then
// create a `package.json` with a `main` that points to this combined JS file.
module.exports.convertThirdpartyLibraryToPackage = (
  packageDirectory,
  packageName,
  createPackageJSON
) => {
  let combinedLibrarySource = "";
  const manifestFileLocation = join(
    packageDirectory,
    "thirdparty-lib.manifest"
  );
  const manifestYAML = safeLoad(readFileSync(manifestFileLocation, "utf8"));

  // The `bugfix` library doesn't provide a valid manifest file.
  if (manifestYAML !== undefined) {
    combinedLibrarySource += getLibraryDependencyRequires(manifestYAML.depends);
    combinedLibrarySource += getLibrarySource(
      packageDirectory,
      manifestYAML.js
    );
    combinedLibrarySource += getLibraryModuleExports(manifestYAML.exports);
    combinedLibrarySource += getLibraryWindowExports(
      packageName,
      manifestYAML.exports
    );
  }

  writeFileSync(
    join(packageDirectory, "converted_library.js"),
    combinedLibrarySource
  );

  if (createPackageJSON) {
    const thirdpartyPackageJSON = compiledThirdpartyJSONTemplate({
      packageName
    });

    writeFileSync(
      join(packageDirectory, "package.json"),
      thirdpartyPackageJSON
    );
  }
};
