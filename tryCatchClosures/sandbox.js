//Bloque try-catch

// try {
//     let numero = "z"

//     if(isNaN(numero)) { //validación
//         throw new Error('El valor ingresado no es un numero');
//     }
//     //se ejecuta hasta acá!!
//     //ignora el console.log del try

//     console.log(numero * numero)
// } catch (error) {
//     console.log('Se produjo el siguiente error: ' + error)
// }

// try {
//   alert("Comienzo de ejecuciones de try");
//   sdafafkma;
//   alert("Fin del try (no alcanzado)");
// } catch (err) {
//   // alert('Un error ocurrió');
//   // alert(err.name);
//   alert(err.message);
//   alert(err.stack);

//   alert(err);
// } finally {
//   alert("La ejecución continúa...");
// }

//CLOSURES

// function saludar( saludo ){
//     return function( nombre ){
//         console.log(`${saludo} ${nombre}`);
//     }

// }

// var saludoHola = saludar('Hola'); // Esto devuelve una función

// saludoHola('Numen'); // 'Hola Numen'

// function hacerSaludo(lenguaje) {
//   if (lenguaje === "en") {
//     return function () {
//       console.log("Hi!");
//     };
//   }

//   if (lenguaje === "es") {
//     return function () {
//       console.log("Hola!");
//     };
//   }
// }

// let saludoIngles = hacerSaludo("en");
// let saludoEspaniol = hacerSaludo("es");

// saludoIngles();
// saludoEspaniol();

// function suma(a) {
//   return function (b) {
//     return a + b;
//   };
// }

// console.log(suma(3)(5));