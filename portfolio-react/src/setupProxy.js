const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use("/json", createProxyMiddleware({
        target: "http://localhost:8000"
    }));
    app.use("/map", createProxyMiddleware({
        target: "http://localhost:8001",
        pathRewrite: function (path, req) { return path.replace("/map", "") }
    }));
    app.use("/sql", createProxyMiddleware({
        target: "http://localhost:8002",
        pathRewrite: function (path, req) { return path.replace("/sql", "") }

    }));
};
