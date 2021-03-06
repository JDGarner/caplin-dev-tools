const { createProxyServer } = require("http-proxy");

module.exports = ({ host = "http://localhost", port = "9999" } = {}) => {
  const proxy = createProxyServer({
    target: `${host}:${port}`
  });

  proxy.on("error", (err, req) => {
    console.error(`Error proxying ${req.path}`, err); //eslint-disable-line
  });

  proxy.on("proxyReq", req => {
    console.log(`Request ${req.path} proxied`); //eslint-disable-line
  });

  proxy.on("proxyRes", (proxyRes, req) => {
    console.log(`Response to ${req.path} from target`); //eslint-disable-line
  });

  return proxy;
};
