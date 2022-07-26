# Test de JavaScript

¡Es hora de poner a prueba cuánto sabes sobre JavaScript!

Esta lectura es una prueba de JavaScript. A diferencia de un examen, nadie te obligará a nada. **Puedes hacer trampa y saltar a la siguiente clase**, ese es el camino fácil. Pero tengo mucha fe en ti, confío en que seguirás mis consejos y no avanzarás a la siguiente clase hasta superar esta prueba.

## Instrucciones para tomar esta prueba

- Evalúa muy críticamente tu conocimiento.
- Si logras resolver la prueba, no importa cuánto te cueste, puedo asegurarte que tienes todo para continuar a las siguientes clases y tomar el resto del curso.
- Si no lo logras, no te preocupes, absolutamente nadie puede juzgarte, solo tú. Vuelve al [Curso Básico de JavaScript](https://platzi.com/cursos/basico-javascript/), anota los temas clave donde puedes mejorar, ubica las clases donde puedes aprenderlos y estudia vigorosamente.
- Es completamente válido hacer búsquedas en Google, cursos y tutoriales de Platzi, incluso usar tu cuaderno de notas sin importar si es físico o virtual.

Recuerda que **el éxito no se mide por cuánto tiempo te toma aprender**, esa métrica es relativamente inútil. Mejor concéntrate en completar los cursos de tu ruta de aprendizaje profesional y desarrollar los proyectos que realmente demuestran que dominas cada tecnología.

¡Mucha suerte!


## Variables y operaciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una variable y para qué sirve?

    Espacios de memoria donde podemos guardar información


- ¿Cuál es la diferencia entre declarar e inicializar una variable?

    //podemos usar var, let, const para declarar variables,
    //var en casos muy especificos genera problemas con las versiones
    //mas recientes de JavaScript, mejor usa let. const para constante.

    //constante 
    const pi = 3.1516;
    
    //variable
    let variable = "algo";
    variable = 12;
    variable = pi;

    declarar es definir la creación de una variable con un nombre, 
    miestras que inicializar es asignarle un valor a ese valor, reasignar a la misma variable es reinicializar.

- ¿Cuál es la diferencia entre sumar números y concatenar strings?

    let suma = 2 + 2;
    >4

    let sumaString = "hola, "+ "amigo";
    sumaString;
    >"hola, amigo"

    Cuando los operandos son números se realiza la operación matemática de adicción, cuando se utilizan cadenas lo que hace es unirlas para formar una sola cadena.


- ¿Cuál operador me permite sumar o concatenar?

### 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

- Nombre: string
- Apellido: string
- Nombre de usuario en Platzi: string (@siempre comienza con una @)
- Edad: number
- Correo electrónico: string (sintaxis@de_correo.mx)
- Mayor de edad: boolean
- Dinero ahorrado: number
- Deudas: number

### 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

```
let nombre = 'au';
let apellido = 'vm';
let username = 'auvm';
let edad = 22;
let mail = 'auvm@yopmail.com';
let esMayorDeEdad = true;
let dineroAhorrado = 1000;
let deudas = 1000;

```


### 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

- Nombre completo (nombre y apellido)

- Dinero real (dinero ahorrado menos deudas)


```
let nombreCompleto = nombre +" "+ apellido;
let dineroReal = dineroAhorrado - deudasM

console.log(nombreCompleto);
console.log(dineroReal);
```


## Funciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una función?

    Las funciones nos permiten guardar bloques de código para ejecutar y retuilizarlos.


- ¿Cuándo me sirve usar una función en mi código?

    Nos sirven cuando tenemos redundancias en el código y para evitarlas, pudiendo encapsular los bloques de código para 
    ejecutarlos posteriormente, así como en códigos muy extensos y hacerlos más legibles.


- ¿Cuál es la diferencia entre parámetros y argumentos de una función?

    Los parametros son los que recibe y están definidos en el cuerpo de la función.

    Los valores que se le pasan a una función al momento de llamarla para que realice una su tarea en particular son los argumentos.


### 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

```
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
```

```
const name = "Juan David";
const lastname = "Castro Gallego";
const nickname = "juandc";

function nombreCompleto(name, lastName){
    return name + " " + lastName;
}
function saludo(name, lastname, nickname){
    let completeName = nombreCompleto(name, lastname);
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}

```

## Condicionales

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un condicional?

    Son la forma en que ejecutamos un bloque de código u otro dependiendo de alguna condición o validación.


- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

    IF(ELSE Y ELSE IF), SWITCH Y TERNARIO

    El condicional switch se valida bajo la misma condición o estado de la variable que se establece al comienzo. Mientras que....

    El condicional if(else y else if) nos permite hacer validaciones distintas en cada condicional.

    Y ambas son para determinar si se ejecuta un bloque de cósigo u otro.




- ¿Puedo combinar funciones y condicionales?

    Si, las funciones pueden encapsular cualquer bloque de código.



### 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

```
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
```

### 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

> 💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional. 😏

```

let tipoDeSuscripcion = {
    free: "Solo puedes tomar los cursos gratis",
    basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    expertPlus: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
};

function conseguirTiposDeSuscripcion(suscripcion){
    if(tipoDeSuscripcion[suscripcion]){
        console.log(tipoDeSuscripcion[suscripcion]);
        return;
    }
    console.warn('Ese tipo de suscripción no exite');
}
```
//Mi versión anterior- no muy buena
const tipoDeSuscripcion = "Basic";
var planes = [{tipo: "Free", leyenda: "Solo puedes tomar los cursos gratis"},
              {tipo: "Basic", leyenda: "Puedes tomar casi todos los cursos de Platzi durante un mes"},
              {tipo: "Expert", leyenda: "Puedes tomar casi todos los cursos de Platzi durante un año"},
              {tipo: "ExpertPlus", leyenda: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"}];
function validacion(tipo, planes){
    for(var plan of planes){
        if(tipo === plan.tipo){
            console.log(plan.leyenda);
        }
    }
}
validacion(tipoDeSuscripcion, planes);
Puedes tomar casi todos los cursos de Platzi durante un mes

## Ciclos

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un ciclo?

    La forma de ejecutar un bloque de código numeras veces hasta que se cumpla una condición.


- ¿Qué tipos de ciclos existen en JavaScript?

    FOR(FOREACH), WHILE, DO-WHILE


- ¿Qué es un ciclo infinito y por qué es un problema?

    Es cuando la validación nunca se cumple y ademas se termina dañando la aplicación.


- ¿Puedo mezclar ciclos y condicionales?

    Si, los ciclos ya son un tipo de condicional, pero también los ciclos pueden encapsular condicionales.


### 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

    let i = 0;
    while(i<5){
        console.log("El valor de i es: " + i);
        i++;
    }


for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

    let = 10;
    while(i>=2){
        console.log("El valor de i es: " + i);
        i--;
    }

```

### 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es `2 + 2`. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

> 💡 Pista: puedes usar la función prompt de JavaScript.

    


## Listas

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un array?

    Es una lista de elementos


- ¿Qué es un objeto?

    Es una lista de elementos PERO cada elemento tiene un nomrbre clave.
    
```
const obj = {
    nombre = "auvm",
    edad = 13
};
```

- ¿Cuándo es mejor usar objetos o arrays?

    arrays cuando lo que haremos en un elemento es lo mismo que en todos los demás.

    un objeto cuando los nombres de cada elemento y diferenciarlos son importantes.



- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?

    si, un objeto puede contener arrays y viceversa.

### 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

    

### 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

### 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

```
let obj = {
    nombre: "auvm",
    edad: 22,
    altura: 1.68
};
Object.values(obj)

function valoresDeObjeto(obj){
    let arr = Object.values(obj);
    for(let elemento of arr){
        console.log(elemento);
    }
}

```
## ¿Cómo te fue? 🏆

**¡Felicidades por completar la prueba de JavaScript!** Confío en que hayas completado cada paso y hayas pausado para repasar los temas de los ejercicios que se te complicaron.

Ahora sí, continúa a la siguiente clase, pero recuerda que **ya no puedes abandonar el curso**, debes completarlo hasta el final. No importa cuánto tiempo te tome. **Yo sé que tú puedes. Y tú deberías de saberlo también.**

¡Te espero en la siguiente clase para comenzar!