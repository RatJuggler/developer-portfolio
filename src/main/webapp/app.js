const templatePath = process.argv[2];
const dataPath = process.argv[3];

const fs = require("fs");

const express = require('express');
const app = express();
const port = 3000;

app.set('views', templatePath);
app.set('view engine', 'twig');

app.use(express.static('public'));

const templateStatic = "Template Version with Static JSON Data Files";
const templateDynamic = "Template Version with Static Data from Java Services";

app.get('/profile.twig', (req, res) => {
    res.render('profile.twig',
        {
            version: templateStatic,
            profile: readJSON(dataPath + "/profile.json")
        });
});
app.get('/skills.twig', (req, res) => {
    res.render('skills.twig',
        {
            version: templateStatic,
            profile: readJSON(dataPath + "/profile.json"),
            data: readJSON(dataPath + "/skills.json")
        });
});
app.get('/career.twig', (req, res) => {
    res.render('career.twig',
        {
            version: templateStatic,
            profile: readJSON(dataPath + "/profile.json"),
            data: readJSON(dataPath + "/career.json")
        });
});
app.get('/interests.twig', (req, res) => {
    res.render('interests.twig',
        {
            version: templateStatic,
            profile: readJSON(dataPath + "/profile.json"),
            data: readJSON(dataPath + "/interests.json")
        });
});

app.listen(port, () => {
    console.log(`developer-portfolio Node application listening on port: ${port}`)
});

function readJSON(filepath) {
    let contents = fs.readFileSync(filepath);
    return JSON.parse(contents);
}
