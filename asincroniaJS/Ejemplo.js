const db = [
    { id: 1, nombre: 'Paula' },
    { id: 2, nombre: 'Andrés' },
    { id: 3, nombre: 'Agustina' },
    { id: 4, nombre: 'Estefanía' }
]

// console.log(db.length);

const buscarId = (id) => {
    const res = db.find(el => el.id === id);

    const promesa = new Promise(function (resuelve, rechaza) {
        setTimeout(() => {
            if (res) {
                resuelve(res);
            } else {
                rechaza(`No se pudo encontrar a la persona con el id ${id}.`)
            }
        }, 1500); //0 | (Math.random() * 1000)
    });
    return promesa;
}

const app = async () => {
    console.log('-----INICIO DE APLICACIÓN');

    try {
        const finalizado = Promise.all([
            await buscarId(2),
            await buscarId(3)
        ]);

        const resultado = await finalizado;
        console.log(resultado);

        const persona1 = await buscarId(5);
        console.log(persona1);

        const persona2 = await buscarId(4);
        console.log(persona2);
    } catch (error) {
        console.log('-----', error);
    }
}

app();
console.log('----- FIN');
console.log('----- OTRO FIN');

// const suma = (a, b) => a + b;
// console.log(suma(2, 4));