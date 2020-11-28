const express = require('express');
const app = express();
const port = 3000;

app.set('views', 'src/templates');
app.set('view engine', 'twig');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index.twig');
});
app.get('/index.twig', (req, res) => {
    res.render('index.twig');
});
app.get('/skills.twig', (req, res) => {
    res.render('skills.twig');
});
app.get('/career.twig', (req, res) => {
    res.render('career.twig');
});
app.get('/interests.twig', (req, res) => {
    res.render('interests.twig');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
