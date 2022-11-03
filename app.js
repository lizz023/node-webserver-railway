require('dotenv').config();
const express = require('express')
const hbs = require('hbs');


const app = express()
const port = process.env.PORT;


//handlebars y parciales(hbs)
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Servir contenido estatico
app.use(express.static('templated-roadtrip'));

//Controlador
app.get('/', (req, res) => {
    res.render('home',{
        nombre: 'Eliza Restrepo',
        titulo: 'Curso de node'
    });
})

app.get('generic', (req, res) => {
    res.render('generic',{
        nombre: 'Eliza Restrepo',
        titulo: 'Curso de node'
    })
})

app.get('elements', (req, res) => {
    res.render('elements',{
        nombre: 'Eliza Restrepo ortiz',
        titulo: 'Curso de node'
    })
})

app.get('/*',  (req, res) => {
    res.sendFile(__dirname + '/templated-roadtrip/404.html');
})

app.listen(port, () => {
    console.log(`Example app linstening at: http:localhost:${port}`)
})