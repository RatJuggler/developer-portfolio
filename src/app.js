const express = require('express');
const app = express();
const port = 3000;

app.set('views', 'src/templates');
app.set('view engine', 'twig');

app.get('/', (req, res) => {
    res.render('index.twig', { name: 'World'});
});

app.get('/name/:name', (req, res) => {
    res.render('index.twig', req.params);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
