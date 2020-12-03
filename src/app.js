const root = process.argv[2];

const fs = require("fs");

const express = require('express');
const app = express();
const port = 3000;

app.set('views', root + 'templates');
app.set('view engine', 'twig');

app.use(express.static('public'));

app.get('/index.twig', (req, res) => {
    res.render('index.twig', {profile: readJSON(root + "data/profile.json")});
});
app.get('/skills.twig', (req, res) => {
    res.render('skills.twig', {profile: readJSON(root + "data/profile.json"), data: readJSON(root + "data/skills.json")});
});
app.get('/career.twig', (req, res) => {
    res.render('career.twig', {profile: readJSON(root + "data/profile.json"), data: readJSON(root + "data/career.json")});
});
app.get('/interests.twig', (req, res) => {
    res.render('interests.twig', {profile: readJSON(root + "data/profile.json"), data: readJSON(root + "data/interests.json")});
});

app.listen(port, () => {
    console.log(`developer-portfolio app listening at http://localhost:${port}`)
});

function readJSON(filepath) {
    let contents = fs.readFileSync(filepath);
    return JSON.parse(contents);
}
