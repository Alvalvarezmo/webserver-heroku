//Paquetes
const express = require('express');
const hbs = require('hbs'); //debe ser instalado previamente
require('./hbs/helpers') //helpers.js

//Definiciones
//..paquete express
const app = express();
//..puerto que nos da heroku
const port = process.env.PORT || 3000; //cuando lo usamos en localhost no existe ninguna variable de process.env.PORT -> usamos 3000

//Documentos publicos
app.use(express.static(__dirname + '/public'));

//Express engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

//Metodo get - home web page
app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'alvaRo aLvarez morAles'
    });
});

//Metodo get - about web page
app.get('/about', (req, res) => {

    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});