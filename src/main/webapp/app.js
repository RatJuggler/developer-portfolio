const templatePath = process.argv[2];
const dataPath = process.argv[3];

const path = require('path');
const fs = require('fs');

const express = require('express');
const app = express();
const port = 3000;

app.set('views', templatePath);
app.set('view engine', 'twig');

const templateStatic = 'Template Version with Static JSON Data Files';
const templates = ['profile', 'skills', 'career', 'interests'];

// Static files.
app.use(express.static('public'));

// Default landing page.
app.get('/', function (req, res) {
    res.redirect('/template/' + templates[0]);
});

// Template rendering.
app.get('/template/*', function (req, res) {
    let aspect = req.params["0"];
    if (!templates.includes(aspect)) aspect = templates[0];
    res.render(aspect + '.twig',
        {
            version: templateStatic,
            profile: readJSON(dataPath, templates[0]),
            data: readJSON(dataPath, aspect)
        });
});

// Static file or Template not found.
app.use(function (req, res) {
    res.status(404).sendFile(path.join('public', '404.html'));
});

// Start the server.
app.listen(port, () => {
    console.log(`developer-portfolio Node application listening on port: ${port}`)
});

function readJSON(dataPath, aspect) {
    let filepath = path.join(dataPath, aspect + '.json');
    let contents = fs.readFileSync(filepath);
    return JSON.parse(contents);
}
