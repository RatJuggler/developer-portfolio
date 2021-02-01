const templatePath = process.argv[2];
const dataPath = process.argv[3];
const publicPath = process.argv[4];
const springUrl = process.argv[5];

const path = require('path');
const fs = require('fs').promises;
const got = require('got');

const express = require('express');
const app = express();
const port = 3000;

app.set('views', templatePath);
app.set('view engine', 'twig');

const templates = ['profile', 'skills', 'career', 'interests'];
const dataSources = ['json', 'spring'];

// Express Async Handler, see: https://zellwk.com/blog/async-await-express/
const asyncHandler = fn =>
    function asyncUtilWrap(...args) {
        const fnReturn = fn(...args)
        const next = args[args.length-1]
        return Promise.resolve(fnReturn).catch(next)
    }

// Static files.
app.use(express.static('public'));

// Default landing page.
app.get('/', asyncHandler(async (req, res, next) => {
    res.redirect('/template/' + templates[0]);
}));

// Template rendering using requested data source.
app.get('/template/:dataFrom/*', asyncHandler(async (req, res, next) => {
    let dataFrom = req.params['dataFrom'];
    if (!dataSources.includes(dataFrom)) dataFrom = dataSources[0];
    let aspect = req.params["0"];
    if (!templates.includes(aspect)) aspect = templates[0];
    const [profile, data] = await Promise.all([getDataFrom(dataFrom, templates[0]), getDataFrom(dataFrom, aspect)]);
    res.render(aspect + '.twig',
        {
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
    console.log(`dataPath     : ${dataPath}`);
    console.log(`publicPath   : ${publicPath}`);
    console.log(`springUrl    : ${springUrl}`);
    console.log(`developer-portfolio template application listening on port: ${port}`);
});

function getTemplateVersion(dataFrom) {
    switch (dataFrom) {
        case 'json':
            return 'Template Version with Static JSON Data Files';
        case 'spring':
            return  'Template Version with Static Data from Spring Services';
        default:
            throw new Error('Unknown data source: ' + dataFrom);
    }
}

function getDataFrom(dataFrom, aspect) {
    switch (dataFrom) {
        case 'json':
            return readStaticJsonFile(dataPath, aspect);
        case 'spring':
            return requestJsonFromUrl(springUrl, aspect);
        default:
            throw new Error('Unknown data source: ' + dataFrom);
    }
}

function readStaticJsonFile(dataPath, aspect) {
    const filepath = path.join(dataPath, aspect + '.json');
    return fs.readFile(filepath)
        .then(data => JSON.parse(data.toString()))
        .catch(err => console.error('Failed to read static JSON file!', err));
}

function requestJsonFromUrl(rootUrl, aspect) {
    return got.get(aspect, {prefixUrl: rootUrl})
        .then(res => JSON.parse(res.body))
        .catch(err => console.error('Request for static JSON data failed!', err));
}
