const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(h1);

console.log({
    h1,
    p, 
    parrafito,
    pid,
    input
});

input.value = "entrada";

//inner lo transforma directamente a html
h1.innerHTML = "Otro texto <br/>"; //no es bueno para la seguridad

//intercambia el texto sin convertirlo a html
h1.innerText = 'Otro <br/> texto';
//previene ataques, así no se
//inyecta código 


//para leer y asignar atributos
// get y set Attribute
console.log(h1.getAttribute('pantalla'));//lee el atributo pantalla
h1.setAttribute('class', 'rojo'); //asigna rojo al atributo class


//manipulación de las clases
h1.classList.add("header-one"); //agrega
h1.classList.remove("rojo"); //elimina


//h1.classList.toggle();
// h1.classList.contains();



//asigna un valor al input
input.value = 456;

//creo una variable donde almaceno el elemento html img
const img = document.createElement('img');
//le asigno atributos que corresponden a las imágenes
img.setAttribute('src', 'https://adventjs.dev/platzi.jpg');
img.setAttribute('width', '100px');

//imprimo el elemento en la consola y ya se puede ver
//la etiqueta con los atributos
console.log(img);

pid.innerHTML = "";

//agrego el elemento almacenado en la variable
//a un elemento que si existe en el html
pid.append(img);

