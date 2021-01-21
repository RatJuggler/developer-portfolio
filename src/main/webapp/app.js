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
const templateDynamic = 'Template Version with Static Data from Java Services';

app.get('/*.twig', (req, res) => {
    let aspect = req.params["0"];
    res.render(aspect + '.twig',
        {
            version: templateStatic,
            profile: readJSON(dataPath + '/profile.json'),
            data: readJSON(dataPath + '/' + aspect + '.json')
        });
});

app.listen(port, () => {
    console.log(`developer-portfolio Node application listening on port: ${port}`)
});

function readJSON(filepath) {
    let contents = fs.readFileSync(filepath);
    return JSON.parse(contents);
}
