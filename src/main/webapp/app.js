const templatePath = process.argv[2];
const dataPath = process.argv[3];
const publicPath = process.argv[4];

const path = require('path');
const fs = require('fs').promises;

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
app.get('/', async (req, res) => {
    res.redirect('/template/' + templates[0]);
});

// Template rendering.
app.get('/template/*', async (req, res) => {
    let aspect = req.params["0"];
    if (!templates.includes(aspect)) aspect = templates[0];
    const profile = await readJSON(dataPath, templates[0]);
    const data = await readJSON(dataPath, aspect);
    res.render(aspect + '.twig',
        {
            version: templateStatic,
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

function readJSON(dataPath, aspect) {
    const filepath = path.join(dataPath, aspect + '.json');
    return fs.readFile(filepath)
        .then(data => JSON.parse(data.toString()))
        .catch(err => console.error('Failed to read data file!', err));
}
