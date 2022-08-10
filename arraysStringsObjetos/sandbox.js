// for(let i=0; i<10; i++){
//     console.log(i);
// }

//ARRAYS Y STRINGS

let arregloDeCosas = [
    'sillón',
    'televisor',
    'computadora',
    'heladera',
    'microondas'
]

let arregloSaludo = [
    'hola',
    'clase',
    'de',
    'La',
    'Matanza'
]

arregloDeCosas.push('mesa');

// console.log(arregloDeCosas[0]);
// console.log(arregloDeCosas[arregloDeCosas.length-1]);

for (let i = 0; i < arregloDeCosas.length; i++) {
    // console.log(arregloDeCosas[i]);
}

function concatenar(arreglo) {
    let concatenado = '';
    for (let i = 0; i < arreglo.length; i++) {
        // concatenado = concatenado+arreglo[i];
        // console.log(concatenado + '- vuelta del bucle n°: ' + i);
        if (i === arreglo.length - 1) {
            concatenado += arreglo[i];
        } else {
            concatenado += arreglo[i] + ' ';
        }
        // console.log(concatenado + '- vuelta del bucle n°: ' + i);
    }
}

concatenar(arregloSaludo);

// let cadena=new String('hola curso');
// let cadena = 'Hola Curso';
// console.log(cadena)
// cadena = cadena.toUpperCase(); //mayúsculas
// console.log(cadena);
// cadena = cadena.toLowerCase(); //minúsculas
// console.log(cadena);

// for (let i = 0; i < cadena.length; i++) {
//     console.log(cadena[i]);
// }

var estudiantes = ['Martin', 'Fernando', 'Sara', 'Samuel', 'Jorge', 'Pedro']
// Posicion:   0          1        2        3         4        5

// console.log(estudiantes[0]) // Martin
// console.log(estudiantes[1]) // Fernando
// console.log(estudiantes[2]) // Sara
// console.log(estudiantes[3]) // Samuel
// console.log(estudiantes[4][0]) // Jorge
// console.log(estudiantes[5][1]) // Pedro

estudiantes[3] = 'Juan';
// console.log(estudiantes);

function devolverPrimerElemento(array) {
    return `La primera posición es: ${array[0]}`;
}

function devolverUltimoElemento(array) {
    return `La última posición es: ${array[array.length - 1]}`;
}

// console.log(devolverPrimerElemento(estudiantes));
// console.log(devolverUltimoElemento(estudiantes));

let arregloNumeros = [10, 20, 30, 40, 50, 60];

function incrementarEnCinco(arreglo) {
    let numerosIncrementados = [];
    for (let i = 0; i < arreglo.length; i++) {
        numerosIncrementados.push(arreglo[i] + 5);
    }
    return numerosIncrementados;
}

//OBJETOS

let gato = {
    nombre: 'Sopa',
    edad: 8,
    esNegro: false,
    comidas: ['atun', 'whiskas', 'carne cruda'],
    retornarNombre() {
        return `Mi nombre es ${this.nombre}`;
    },
    // retornarDieta() {
    //     let dietaGato = '';
    //     for (let i = 0; i < this.comidas.length; i++) {
    //         if (i === this.comidas.length - 1) {
    //             dietaGato += 'y ' + this.comidas[i];
    //         } else {
    //             dietaGato += this.comidas[i] + ', ';
    //         }
    //     }
    //     return `Mi nombre es ${this.nombre} y como ${dietaGato}.`;
    // }
}

