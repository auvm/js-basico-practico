const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btnCalculo = document.querySelector("#btnCalcular");
const result = document.getElementById('result');


// agregar listener
// btnCalculo.addEventListener('nom_del_evento', 'metodo_de_js_a_ejecutar');
btnCalculo.addEventListener('click', btnClicked);

//al meter los inputs en un form ahora se debe escuchar
//al formulario, a su evento submit
// form.addEventListener('submit', formSubmit);

// function formSubmit(event){
//     // console.log({event});
//     event.preventDefault();//evita el recargar default de la página
//     const suma = Number(input1.value) + Number(input2.value);
//     result.innerText = "Resultado: " + suma;
//}

function btnClicked(){
    const suma = Number(input1.value) + Number(input2.value);
    result.innerText = "Resultado: " + suma;
}
