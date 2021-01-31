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

// Static files.
app.use(express.static('public'));

// Default landing page.
app.get('/', async (req, res) => {
    res.redirect('/template/' + templates[0]);
});

// Template rendering using static JSON data files.
app.get('/template/json/*', async (req, res) => {
    let aspect = req.params["0"];
    if (!templates.includes(aspect)) aspect = templates[0];
    const profile = await readStaticJsonFile(dataPath, templates[0]);
    const data = await readStaticJsonFile(dataPath, aspect);
    res.render(aspect + '.twig',
        {
            version: 'Template Version with Static JSON Data Files',
            profile: profile,
            data: data
        });
});

// Template rendering using static data from Spring services.
app.get('/template/spring/*', async (req, res) => {
    let aspect = req.params["0"];
    if (!templates.includes(aspect)) aspect = templates[0];
    const profile = await requestJsonFromUrl(springUrl, templates[0]);
    const data = await requestJsonFromUrl(springUrl, aspect);
    res.render(aspect + '.twig',
        {
            version: 'Template Version with Static Data from Spring Services',
            profile: profile,
            data: data
        });
});

// Static file or Template not found.
app.use(async (req, res) => {
    res.status(404).sendFile(path.join(__dirname, publicPath, '404.html'));
});

// Start the server.
app.listen(port, () => {
    console.log(`developer-portfolio Node application listening on port: ${port}`)
});

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
