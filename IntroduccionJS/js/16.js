//Funciones

//1. Declaracion de funcion

function sumar() {
    console.log(10*10);
}
sumar();

//2. Expresion de la funcion

const sumar2 = function() {
    console.log(3+3);
}
sumar2();

//3. IIFE se manda a llamar ella misma

(function () {
    console.log ('esto es una funcion')
}) ();

//para proteger que no se mezclen variables de otros archivos
//con otras var de otros archivos



//Hoisting  (ejecutar en 2 vueltas)
//Se puede llamar la funcion y luego crearla
//js hace dos vueltas, en la priemer etapa registra las funciones 
//en el segundo llamado llama la funcion


//1. Declaracion de funcion, no da error
sumar();
function sumar() {
    console.log(10*10);
}
//2. Expresion de la funcion
//con la expresion de la fucnion  no sirve el hoisting
// sumar2();
// const sumar2 = function() {
//     console.log(3+3);
// }
//da error
