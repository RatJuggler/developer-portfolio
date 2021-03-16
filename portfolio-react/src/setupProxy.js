const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use("/json", createProxyMiddleware("http://localhost:8000"));
    app.use("/map", createProxyMiddleware("http://localhost:8001"));
    app.use("/sql", createProxyMiddleware("http://localhost:8002"));
};
