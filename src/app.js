const express = require('express');
const app = express();
const port = 3000;

app.set('views', 'src/templates');
app.set('view engine', 'twig');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index.twig');
});
app.get('/index', (req, res) => {
    res.render('index.twig');
});
app.get('/skills', (req, res) => {
    res.render('skills.twig');
});
app.get('/career', (req, res) => {
    res.render('career.twig');
});
app.get('/interests', (req, res) => {
    res.render('interests.twig');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
