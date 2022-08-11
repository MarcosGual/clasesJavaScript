//OBJETO - EJEMPLO
const gatito = {
  nombre: "pepito",
  edad: 10,
  color: "negro",
  presentacion() {
    return `Hola, soy ${this.nombre}`;
  },
};
console.log(gatito.presentacion());

let conejo = {};
conejo.hablar = function (linea) {
  return `El conejo dice: ${linea}`;
};
console.log(conejo.hablar("Hola soy un conejo"));

let arreglo = [1, 2, 3, 4, 5];
arreglo.push(6);
console.log(arreglo);

//INSTANCIA EN BASE AL PROTOTIPO DE STRING
let cadena = new String("cadena");
console.log(cadena);
console.log(cadena.indexOf("n"));

//CLASE E INSTANCIA DE CLASE
//PALABRA RESERVADA "CLASS"
class gato {
  constructor(nombre, edad, color) {
    this.nombre = nombre;
    this.edad = edad;
    this.color = color;
  }
  decir(unaLinea) {
    return `El gato ${this.nombre}
        dice: ${unaLinea}`;
  }
  saludoSimple() {
    return `Hola, buen jueves!`;
  }
}

//INSTANCIAS DE LA CLASE GATO
//INSTANCIA CON PALABRA RESERVADA "NEW"
let gato1 = new gato("pepito", 6, "negro");
let gato2 = new gato("lolita", 10, "blanco");

console.log(gato1.color);
console.log(gato2.color);
console.log(gato1.nombre);

console.log(gato1.decir("Hola, cómo están?"));
console.log(gato2.decir("MIAU"));

//CLASES Y HERENCIA

class Automovil {
  constructor(marca) {
    this.marca = marca;
  }
  presentar() {
    return `Hola, tengo un ${this.marca}.`;
  }
}
class Modelo extends Automovil {
  constructor(marca, modelo) {
    super(marca);
    this.modelo = modelo;
  }
  verModelo() {
    return `Este modelo es: ${this.modelo}.`;
  }
  presentar() {
    //override
    return `Hola, tengo un ${this.marca} ${this.modelo}.`;
  }
}

let auto = new Modelo("Ford", "Mustang");
console.log(auto.verModelo());
console.log(auto.presentar());
