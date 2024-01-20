/**PRACTICA 3*/

/**Ejercicio 1
 * Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
 * 
 
*/

let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
}



/*ejercicio 2 Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.*/
let contador2 = 10;
while (contador2 >= 0) {
    console.log(contador2);
    contador2--;
}



/**ejercicio 3 
 * Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
*/
let contador3 = 0;
let numero = Number(prompt("ingrese un numero"));
while (contador3 <= numero) {
    console.log(contador3);
    contador3++;
}




/**ejercicio 4
 * Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
 */
let contador4 = 0;
let numero4 = Number(prompt("ingrese un numero"));

while (contador4 <= numero4) {
    console.log(contador4);
    contador4++;
}






/*Practica 4 curso de progra  */

/**Ejercicio 1
/**Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.*/
console.log("bienvenido a mi programa");

/**Ejercicio 2
Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
*/
let nombre1 = "jose";
console.log("hola " + nombre);

/**Ejercicio 3
Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".
*/
let nombre = "RICARDO";
alert("hola " + nombre);

/**Ejercicio 4
Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.
*/
let lenguaje = prompt("¿Cuál es el lenguaje de programación que más te gusta?");
console.log(lenguaje);

/**Ejercicio 5
Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.
*/
let valor1 = 10;
let valor2 = 20;
let resultado = valor1 + valor2;
console.log("la suma de " + valor1 + " y " + valor2 + " es igual a " + resultado);

/**Ejercicio 6
Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.
*/
let valor3 = 10;
let valor4 = 20;
let resultado2 = valor3 - valor4;
console.log("la diferencia entre " + valor3 + " y " + valor4 + " es igual a " + resultado2);

/**Ejercicio 7
Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.
*/
let edad = Number(prompt("ingrese su edad"));
if (edad >= 18) {
    console.log("usted es mayor de edad");
}
else {
    console.log("usted es menor de edad");
}


/**Ejercicio 8
Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.
*/
let numeroS = Number(prompt("ingrese un numero"));
if (numeroS > 0) {
    console.log("el numero es positivo");
}
else if (numeroS < 0) {
    console.log("el numero es negativo");
}
else {
    console.log("el numero es cero");
}

/**Ejercicio 9
Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
*/
let contador5 = 1;
while (contador5 <= 10) {
    console.log(contador5);
    contador5++;
}

/**Ejercicio 10
Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.
*/
let nota = Number(prompt("ingrese su nota"));
if (nota >= 7) {
    console.log("aprobado");
}   else {
    console.log("reprobado");
}

/**Ejercicio 11
Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.
*/
let numeroAleatorio = Math.random();
console.log(numeroAleatorio);


/**Ejercicio 12
Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.*/
let numeroAleatorio2 = Math.random() * 10;
console.log(numeroAleatorio2);



/**Ejercicio 13
Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola. */
let numeroAleatorio3 = Math.random() * 1000;
console.log(numeroAleatorio3);

