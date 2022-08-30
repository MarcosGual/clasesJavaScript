//Promesas

// function dividirPromise(dividendo, divisor){
//   return new Promise((resolver,rechazar)=>{
//     if(divisor==0){
//       rechazar('no se puede dividir por cero!');
//     } else{
//       resolver(dividendo/divisor);
//     }
//   });
// }

// dividirPromise(10,0)
// .then(resultado=>{
//   console.log(`resultado: ${resultado}`);
// })
// .catch(error=>{
//   console.log(`error: ${error}`);
// })

// dividirPromise(10,0)
// .then(resultado=>{
//   console.log(`resultado: ${resultado}`);
// })
// .catch(error=>{
//   console.log(`error: ${error}`);
// })


function cuadradoPromise(value) {
  if (typeof value !== "number") {
    return Promise.reject(
      `Error, el valor " ${value} " ingresado no es un número`
    );
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value,
        result: value * value,
      });
    }, 0 | (Math.random() * 2000));
  });
}

//Implementación

cuadradoPromise(0)
  .then((obj) => {
    //console.log(obj);
    console.log("Inicio Promise");
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(1);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(2);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(3);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise("4");
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(5);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    console.log("Fin Promise");
  })
  .catch((err) => console.error(err));