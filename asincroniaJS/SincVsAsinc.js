//JS Sincronía

// console.log("Inicio");

// function dos() {
//   console.log("Dos");
// }

// function uno() {
//   console.log("Uno");
//   dos();
//   console.log("Tres");
// }

// uno();
// console.log("Fin");

//JS Asíncrono

console.log("Inicio");

function dos() {
  setTimeout(function () {
    console.log("Dos");
  }, 1000);
}

function uno() {
  setTimeout(function () {
    console.log("Uno");
  }, 500);
  dos();
  console.log("Tres");
}

uno();
console.log("Fin");

// function realizarTarea(num, cb){
//   console.log('Realizando la tarea nro '+num +'...');
//   setTimeout(cb,1000);
// }

// realizarTarea(1,()=>{
//   realizarTarea(2,()=>{
//     realizarTarea(3,()=>{
//       realizarTarea(4,()=>{
//         console.log('Fin de las tareas.');
//       });
//     });
//   });
// })

// console.log('Otras tareas...');