const templatePath = process.argv[2];
const dataPath = process.argv[3];

const fs = require("fs");

const express = require('express');
const app = express();
const port = 3000;

app.set('views', templatePath);
app.set('view engine', 'twig');

app.use(express.static('public'));

const templateStatic = 'Template Version with Static JSON Data Files';
const templates = ['profile', 'skills', 'career', 'interests'];

app.get('/', function (req, res) {
    res.redirect('/template/profile');
});

app.get('/template/*', function (req, res, next) {
    let aspect = req.params["0"];
    if (!templates.includes(aspect)) aspect = templates[0];
    res.render(aspect + '.twig',
        {
            version: templateStatic,
            profile: readJSON(dataPath + '/profile.json'),
            data: readJSON(dataPath + '/' + aspect + '.json')
        });
});

app.use(function (req, res) {
    res.status(404).send("No such template!")
});

app.listen(port, () => {
    console.log(`developer-portfolio Node application listening on port: ${port}`)
});

function readJSON(filepath) {
    let contents = fs.readFileSync(filepath);
    return JSON.parse(contents);
}
