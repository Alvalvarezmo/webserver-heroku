//Paquetes
const hbs = require('hbs'); //debe ser instalado previamente

//Helpers - funciones para la pagina web
//..cunado usamos 'getYear' en la pagina web hace esta funcion
hbs.registerHelper('getYear', () => {
    return new Date().getFullYear();
});
//..recibe un texto, cambia a mayuscula la primera letra y las demas a minusculas
hbs.registerHelper('capitalizar', (texto) => {
    //dividimos la frase en palabras
    let palabras = texto.split(' ');
    //capitalizamos cada palabra
    palabras.forEach((palabra, indice) => {
        palabras[indice] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    //unimos todas las palabras y devolvemos el resultado
    return palabras.join(' ');
});