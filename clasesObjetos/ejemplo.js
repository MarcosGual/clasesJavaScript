
class Persona {

    //CONSTRUCTOR
    constructor(nombre, edad) {
        //ATRIBUTOS
        // OR
        this.nombre = nombre || "sin nombre registrado";
        //undefined
        this.edad = edad || "sin edad registrada";
    }
    //METODOS
    quienSoy(nombre, edad) {
        return `Yo soy ${nombre} y mi edad es ${edad}`
    }
}


class Cliente extends Persona{

    constructor(nombre, edad , empresa ) {
        super(nombre,edad);
        this.empresa = empresa || 'Sin empresa registrada';
    }

    
    describirse() {
        return this.quienSoy() + ` y soy de la empresa ${this.empresa}`
    }
    nombreYEmpresa(){
        return `yo soy ${this.nombre} y trabajo en ${this.empresa}`
    }
}

class Proveedor extends Cliente {
    constructor(edad,empresa,nombre) {
        super(empresa, edad, nombre)
    }

    presentar(){
        return `Soy un Proveedor y ${this.quienSoy()}`
    }
}
/*
const cliente1 = new Cliente('Juan',32,"NTT DATA")


console.log(cliente1.describirse())
*/
//ATRIBUTO
/*
console.log(cliente1.nombreYEmpresa())
*/

const proveedor1 = new Proveedor("24","Juan","Telefonica")
console.log(proveedor1.quienSoy("Juan",32))


/*
const juan = new Persona()
console.log(juan)
*/
/*


objeto.nombre
objeto.saludar("juan")

let arrayDeObjetos = [
    {
    nombre: "juan",
    saludar(nombre){
        return "hola " + nombre
    }
}
]
arrayDeObjetos[0].saludar("juan")*/
