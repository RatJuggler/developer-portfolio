const templatePath = process.argv[2];
const dataPath = process.argv[3];

const fs = require("fs");

const express = require('express');
const app = express();
const port = 3000;

app.set('views', templatePath);
app.set('view engine', 'twig');

app.use(express.static('public'));

app.get('/:dataFrom/*.twig', (req, res) => {
    let aspect = req.params['0'];
    let dataFrom = req.params['dataFrom'];
    res.render(aspect + '.twig',
        {
            version: getTemplateVersion(dataFrom),
            profile: getDataFrom('profile', dataFrom),
            data: getDataFrom(aspect, dataFrom)
        });
});

app.listen(port, () => {
    console.log(`developer-portfolio Node application listening on port: ${port}`)
});

function readJSON(filepath) {
    let contents = fs.readFileSync(filepath);
    return JSON.parse(contents);
}

function getDataFrom(aspect, dataFrom) {
    return readJSON(dataPath + '/' + aspect + '.json');
}

function getTemplateVersion(dataFrom) {
    switch (dataFrom) {
        case 'json':
            return 'Template Version with Static JSON Data Files';
        case 'java':
            return  'Template Version with Static Data from Java Services';
        default:
            return 'Unknown data source: ' + dataFrom;
    }
}
