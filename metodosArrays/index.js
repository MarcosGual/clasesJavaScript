function saludarUsuario(usuario) {
    return `Hola ${usuario}!`
}

function despedirUsuario(usuario) {
    return `Adiós ${usuario}!`
}

function crearSaludo(usuario, callback) {
    return callback(usuario)
}

// console.log(crearSaludo('Numen', saludarUsuario));
// console.log(crearSaludo('Numen', despedirUsuario));

//ejemplo de recorrido de array con for...of
let iterable = [10, 20, 30];

// for (let value of iterable) {
//     value += 1;
//     console.log(value);
// }

//MÉTODOS DE ARRAYS

//Método .forEach()

var profesores = ['Cinthia', 'Matias', 'Aaron', 'Santi']

// for(let i=0; i<profesores.length;i++){
//     console.log(profesores[i]);
// }

// con callback

// profesores.forEach(function (elemento, indice) {
//     elemento = `${indice} - ${elemento}`;
//     console.log(elemento);
// });

//Método .map()

const profes = [
    {
        nombre: 'Matias',
        edad: 33,
        profesion: 'Profesor',
    },
    {
        nombre: 'Cinthia',
        edad: 31,
        profesion: 'Coordinadora',
    },
    {
        nombre: 'Andres',
        edad: 27,
        profesion: 'Profesor',
    },
    {
        nombre: 'Guillermo',
        edad: 25,
        profesion: 'Tutor',
    }
]

//DOM: document object model
document.body.innerHTML = profes.map(elemento => {
    return (`
      <h2>Bienvenidos a Academia Numen</h2>
      
      <p>En esta ocasión quiero presentarles
      a ${elemento.nombre} quien será su ${elemento.profesion}
      a lo largo de este curso.</p>
    `)
})

let numeros = [1, 2, 3, 4, 5];

let cuadrados = numeros.map(numero => {
    return Math.pow(numero, 2);
});

// console.log(numeros);
// console.log(cuadrados);

//Método .filter()

var palabras = ['chancleta', 'pato', 'bigote', 'ornitorrinco', 'termo', 'ajedrez', 'bigote'];

// var resultado = palabras.filter(palabra => palabra.length > 4);
var resultado = palabras.filter(palabra => palabra === 'bigote');

// console.log(resultado);

var resultado2 = numeros.filter(numero => numero > 4);
// console.log(resultado2);

//Método .reduce()

// console.log(numeros.reduce((acumulador, valorElemento) => acumulador + valorElemento, 0));

// let words = ['Hola', 'alumnos', 'de', 'La', 'Matanza'];

// console.log(words.reduce((acu, ele) => acu + ele + ' ', ''));

// function elevarAExponente(num, exponente){
//     return num**exponente;
// }

function saludar( saludo ){ 
    return function( nombre ){
        console.log(`${saludo} ${nombre}`);
    }
}

var saludoHola = saludar('Hola'); // Esto devuelve una función

saludoHola('Numen'); // 'Hola Numen'

var despedida=saludar('Adiós,')