/**PRACTICA 2 */

/**EJERCICIO 1
 * Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
 *
 */
let dia = prompt("¿Qué día de la semana es?");
if (dia == "Sábado" || dia == "Domingo") {
  alert("¡Buen fin de semana!");
}else {
    alert("¡Buena semana!");
  }     
/**EJERCICIO 2
 * Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
 */
let numero = prompt("Ingrese un número");
if (numero >= 0) {
  alert("El número es positivo");  
}else if (numero < 0){
    alert("El número es negativo");
  }
  else {
    alert("El número es cero");
  }

/**EJERCICIO 3
 * Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intenta nuevamente para ganar."
 */


let puntuacion = prompt("Ingrese su puntuación");
if (puntuacion >= 100) {
  alert("¡Felicidades, has ganado!");
}else {
    alert("Intenta nuevamente para ganar.");
  }


/**EJERCICIO 4
 * Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
 *
 */
let saldo = prompt("Ingrese su saldo");
alert(`Su saldo es de: ${saldo}`);


/**EJERCICIO 5
 * Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre./*
    */
let nombre = prompt("Ingrese su nombre");
alert(`Bienvenido ${nombre}`);



