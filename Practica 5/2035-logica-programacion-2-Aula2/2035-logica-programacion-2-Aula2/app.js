/**PRACTICA 5 FUNCIONES */

/**Ejercicio 1
 * Crear una función que muestre "¡Hola, mundo!" en la consola.
  */
 function holaMundo(){
        console.log("¡Hola, mundo!");
    }
    holaMundo();


/**Ejercicio 2
 * Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
 */
function holaNombre(nombre){
    console.log(`¡Hola ${nombre}!`);
}
holaNombre("Juan");



/**Ejercicio 3 
 * Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
 */
function dobleNumero(numero){
    return numero * 2;
}
console.log(dobleNumero(5));



/**Ejercicio 4
 * Crear una función que reciba tres números como parámetros y devuelva su promedio.
 */
function promedioTresNumeros(numero1, numero2, numero3){
    return (numero1 + numero2 + numero3) / 3;
}
console.log(promedioTresNumeros(5, 10, 15));



/**Ejercicio 5
 * Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
 */
function mayorDeDosNumeros(numero1, numero2){
    if(numero1 > numero2){
        return numero1;
    }else{
        return numero2;
    }
}


/**Ejercicio 6
 * Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
 */ 
function multiplicarNumeroPorSiMismo(numero){
    return numero * numero;
}       
console.log(multiplicarNumeroPorSiMismo(5));
 
