//Solicita al usuario que ingrese un número y muestra un mensaje de alerta indicando si el número es par o impar.

let numero = parseInt(prompt("Ingrese un numero entero"));

// VALIDACION PAR - divido 2 da entero
//VALIDACION IMPAR - divido dos da float

let validacion = (numero / 2);

if (Number.isInteger(validacion)){
    alert("Su numero es PAR");
} else {
    alert("Su numero es IMPAR");
}