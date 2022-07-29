//Callback - ejemplos simples

/*function mensaje(callback) {
    console.log('Mensaje antes de la llamada a la callback.');
    callback();
}

function saludo() {
    console.log('Saludo luego de la llamada a la callback.');
}

mensaje(saludo);*/


/*function sumar(a, b, callback) {
    let resultado = a + b;
    callback(resultado);
}

function resultado(res) {
    console.log(`El resultado de la suma es ${res}`);
}

sumar(3, 8, resultado);*/

//Callbacks con setTimeout

function cuadradoCallback(value, callback) {
    setTimeout(() => {
        callback(value, value * value);
    }, 0 | (Math.random() * 1000));
}

//Implementación

/*cuadradoCallback(0, (value, result) => {
    console.log("Inicia Callback");
    console.log(`Callback: ${value}, ${result}`);
    cuadradoCallback(1, (value, result) => {
        console.log(`Callback: ${value}, ${result}`);
        cuadradoCallback(2, (value, result) => {
            console.log(`Callback: ${value}, ${result}`);
            console.log("Fin Callback");
        });
    });
});*/


//Callback Hell

cuadradoCallback(0, (value, result) => {
    console.log("Inicia Callback");
    console.log(`Callback: ${value}, ${result}`);
    cuadradoCallback(1, (value, result) => {
        console.log(`Callback: ${value}, ${result}`);
        cuadradoCallback(2, (value, result) => {
            console.log(`Callback: ${value}, ${result}`);
            cuadradoCallback(3, (value, result) => {
                console.log(`Callback: ${value}, ${result}`);
                cuadradoCallback(4, (value, result) => {
                    console.log(`Callback: ${value}, ${result}`);
                    cuadradoCallback(5, (value, result) => {
                        console.log(`Callback: ${value}, ${result}`);
                        console.log("Fin Callback");
                        console.log("Callback Hell !!!!!😈🤘");
                        console.log("http://callbackhell.com/");
                    });
                });
            });
        });
    });
});