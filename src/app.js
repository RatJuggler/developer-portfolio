const fs = require("fs");

const express = require('express');
const app = express();
const port = 3000;

app.set('views', 'src/templates');
app.set('view engine', 'twig');

app.use(express.static('public'));

app.get('/index.twig', (req, res) => {
    res.render('index.twig', {profile: readJSON("src/data/profile.json")});
});
app.get('/skills.twig', (req, res) => {
    res.render('skills.twig', {profile: readJSON("src/data/profile.json"), data: readJSON("src/data/skills.json")});
});
app.get('/career.twig', (req, res) => {
    res.render('career.twig', {profile: readJSON("src/data/profile.json"), data: readJSON("src/data/career.json")});
});
app.get('/interests.twig', (req, res) => {
    res.render('interests.twig', {profile: readJSON("src/data/profile.json"), data: readJSON("src/data/interests.json")});
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

function readJSON(filepath) {
    let contents = fs.readFileSync(filepath);
    return JSON.parse(contents);
}
