const { Server } = require("karma");

function runOnlyATs(args) {
  return args.ats ||
    args.ATs ||
    args._.includes("--ats") ||
    args._.includes("--ATs") ||
    args._.includes("ats") ||
    args._.includes("ATs") ||
    false;
}

module.exports.runOnlyATs = runOnlyATs;

function runOnlyUTs(args) {
  return args.uts ||
    args.UTs ||
    args._.includes("--uts") ||
    args._.includes("--UTs") ||
    args._.includes("uts") ||
    args._.includes("UTs") ||
    false;
}

module.exports.runOnlyUTs = runOnlyUTs;

function getSelectedBrowser(commandLineArgs) {
  let browser = commandLineArgs.b || commandLineArgs.browser || "chrome";
  const optionlessArgs = commandLineArgs._;
  const browserIndex = optionlessArgs.indexOf("--browser");

  if (browserIndex !== -1) {
    browser = optionlessArgs[browserIndex + 1];
  }

  return browser.toLowerCase();
}

function getTestBrowser(commandLineArgs) {
  const selectedBrowser = getSelectedBrowser(commandLineArgs);

  switch (selectedBrowser) {
    case "ie":
      return "IE";
    case "firefox":
      return "Firefox";
    case "chrome":
      return "Chrome";
    case "chrome-headless":
      return "ChromeHeadless";

    default:
      console.log(
        `${selectedBrowser} is not a supported browser, defaulting to Chrome`
      );
      return "Chrome";
  }
}

module.exports.getTestBrowser = getTestBrowser;

function showSummary({ success, failed, error, errors }, devMode) {
  if (devMode === false) {
    console.log("\n== Test Report ==");

    if (failed > 0 || error) {
      console.log(
        "\n\x1b[41m\x1b[30mTesting ended with failures/errors!\x1b[0m"
      );
      console.log(
        `${errors
          .map(
            ({ packageName, error }) =>
              `\nTest failed in: \x1b[35m${packageName}\n${error}`
          )
          .join("\n")}\n`
      );
    } else {
      console.log("\n\x1b[42m\x1b[30mTesting ended with no failures!\x1b[0m");
    }

    console.log(`\x1b[35mPassed:\x1b[0m ${success}`);
    console.log(`\x1b[35mFailed:\x1b[0m ${failed}`);
    console.log(`\x1b[35mErrors:\x1b[0m ${error ? "Yes" : "No"}`);

    if (failed > 0 || error) {
      process.exit(1);
    }
  }
}

module.exports.showSummary = showSummary;

function getShortPathFromBasePath(basePath) {
  return basePath.substring(basePath.indexOf("apps"));
}

module.exports.getShortPathFromBasePath = getShortPathFromBasePath;

function filterPackagesToTest(packagesTestMetadata, packagesToTest) {
  if (packagesToTest.length === 0) {
    return packagesTestMetadata;
  }

  return packagesTestMetadata.filter(({ packageName }) =>
    packagesToTest.includes(packageName));
}

module.exports.filterPackagesToTest = filterPackagesToTest;

function runPackageTests(karmaConfig, resolve, summary, packageName) {
  console.log(
    `\nRunning ${karmaConfig.testsType} for: \x1b[35m${packageName}\x1b[0m`
  );

  const server = new Server(karmaConfig, () => {
    resolve();
  });

  server.on("run_complete", (browsers, { success, failed, error }) => {
    summary.success += success;
    summary.failed += failed;
    summary.error = summary.error || error;
  });

  server.start();
}

module.exports.runPackageTests = runPackageTests;
