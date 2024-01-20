
/*
EJERCICIO 2
Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".

 */
let titulo = document.querySelector('h1');
/*El query selector sirve para llamar un objeto de una clas html */
titulo.innerHTML = ' HORA DEL DESAFIO';
/*El innerHTML sirve para cambiar el contenido de un objeto html */

/*EJERCICIO 3
Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".
*/
function mensaje(){
    console.log('El boton fue clicado');
}


/*EJERCICIO 4
Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".

*/
function ciudad(){
    let ciudad = prompt('Ingrese una ciudad de Brasil');
    alert('Estuve en ' + ciudad + ' y me acorde de ti');
}


/*EJERCICIO 5
Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".
*/
function alerta(){
    alert('Yo amo JS');
}

/*EJERCICIO 6 
Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.
*/
function suma(){
    let num1 = prompt('Ingrese un numero');
    let num2 = prompt('Ingrese otro numero');
    let resultado = parseInt(num1) + parseInt(num2);
    alert('El resultado de la suma es: ' + resultado);
}








