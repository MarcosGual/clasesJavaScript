const body = document.body;
// body.append("Hola Mundo!");
// body.appendChild('Hola Mundo!');
//error: no se pueden agregar strings con appendChild()
//sólo puedo adjuntar elementos
//para utilizar este método deberemos crear el elemento

// const div = document.createElement("div");
// div.innerText = "Hola Mundo!";
// div.textContent = "Hola Mundo! 2";
// body.append(div);

const div = document.querySelector("div");

// console.log(div.textContent);
// console.log(div.innerText);
// console.log(div.innerHTML);

// div.innerText="<strong>Hola Mundo!</strong>";
// div.innerHTML = "<strong>Hola Mundo!</strong>";

// const strong = document.createElement("strong");
// strong.innerText = "Hola Mundo!";
// div.append(strong);

const spanSaludo=document.querySelector('#saludo');
const spanDespedida=document.querySelector('#despedida');

//ELIMINANDO ELEMENTOS CON remove()
// spanSaludo.remove();
// spanDespedida.remove();

//Eliminando con removeChild()
// div.removeChild(spanSaludo);
// div.removeChild(spanDespedida);

//Mostrando, modificando y eliminando atributos
console.log(spanSaludo.getAttribute("title"));
console.log(spanDespedida.getAttribute('title'));

spanSaludo.setAttribute('class', 'saludo');
spanSaludo.setAttribute('id', 'dsasd');

spanSaludo.removeAttribute('id');

//Data test
console.log(spanSaludo.dataset);