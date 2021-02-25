const http = require("http");

const options = {
    host : "localhost",
    port : 3000,
    timeout : 5000
};

const healthCheck = http.request(options, (res) => {
    console.log(`HEALTHCHECK STATUS: ${res.statusCode}`);
    if (res.statusCode === 200) {
        process.exit(0);
    } else {
        process.exit(1);
    }
});

healthCheck.on('error', function(err) {
    console.error('HEALTHCHECK ERROR', err);
    process.exit(1);
});

healthCheck.end();
