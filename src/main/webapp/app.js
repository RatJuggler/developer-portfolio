const templatePath = process.argv[2];
const publicPath = process.argv[3];
const jsonUrl = process.argv[4];
const mapUrl = process.argv[5];
const sqlUrl = process.argv[6];

const path = require('path');
const got = require('got');

// Configure metrics.
const promBundle = require('express-prom-bundle');
const metricsMiddleware = promBundle({
    includePath: true,
    includeUp: false,
    metricType: 'summary',
    promClient: {
        collectDefaultMetrics: {}
    }
});

// Configure Express.
const express = require('express');
const app = express();
const port = 3000;

app.set('views', templatePath);
app.set('view engine', 'twig');

// Define valid templates and data sources.
const templates = ['profile', 'skills', 'career', 'interests'];
const dataSources = ['json', 'map', 'sql'];

// Express Async Handler, see: https://zellwk.com/blog/async-await-express/
const asyncHandler = fn =>
    function asyncUtilWrap(...args) {
        const fnReturn = fn(...args)
        const next = args[args.length-1]
        return Promise.resolve(fnReturn).catch(next)
    }

// Apply metrics on all routes.
app.use(metricsMiddleware);

// Static files.
app.use(express.static('public'));

// Default landing page.
app.get('/', asyncHandler(async (req, res, next) => {
    res.redirect('/index.html');
}));

// Template rendering using requested data source.
app.get('/template/:aspect/:dataFrom', asyncHandler(async (req, res, next) => {
    let aspect = req.params["aspect"];
    if (!templates.includes(aspect)) aspect = templates[0];
    let dataFrom = req.params['dataFrom'];
    if (!dataSources.includes(dataFrom)) dataFrom = dataSources[0];
    const [profile, data] = await Promise.all([getDataFrom(dataFrom, templates[0]), getDataFrom(dataFrom, aspect)]);
    res.render(aspect + '.twig', {
            version: getTemplateVersion(dataFrom),
            dataFrom: dataFrom,
            profile: profile,
            data: data
        });
}));

// Static file or Template not found.
app.use(asyncHandler(async (req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, publicPath, '404.html'));
}));

// Start the server.
app.listen(port, () => {
    console.log(`templatePath : ${templatePath}`);
    console.log(`publicPath   : ${publicPath}`);
    console.log(`jsonUrl      : ${jsonUrl}`);
    console.log(`mapUrl       : ${mapUrl}`);
    console.log(`sqlUrl       : ${sqlUrl}`);
    console.log(`developer-portfolio template application listening on port: ${port}`);
});

function getTemplateVersion(dataFrom) {
    switch (dataFrom) {
        case 'json':
            return 'Template Version with data from static JSON files';
        case 'map':
            return  'Template Version with data from a Map repository Spring service';
        case 'sql':
            return  'Template Version with data from a SQL repository Spring service';
        default:
            throw new Error('Unknown data source: ' + dataFrom);
    }
}

function getDataFrom(dataFrom, aspect) {
    switch (dataFrom) {
        case 'json':
            return requestJsonFromUrl(jsonUrl, aspect + '.json');
        case 'map':
            return requestJsonFromUrl(mapUrl, aspect);
        case 'sql':
            return requestJsonFromUrl(sqlUrl, aspect);
        default:
            throw new Error('Unknown data source: ' + dataFrom);
    }
}

function requestJsonFromUrl(rootUrl, aspect) {
    return got.get(aspect, {prefixUrl: rootUrl})
        .then(res => JSON.parse(res.body))
        .catch(err => console.error('Request for JSON data from URL failed!', err));
}
