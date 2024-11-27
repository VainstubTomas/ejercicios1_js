//Pide al usuario que ingrese su año de nacimiento y muestra su edad en la consola.

let añoNacimiento = parseInt(prompt("Ingrese su año de nacimiento"));

// el año debe ser >=1900 o <=2024, y deber ser isNaN VALIDACION

while(isNaN(añoNacimiento) || añoNacimiento < 1900 || añoNacimiento > 2024){
    alert("Coloque un año valido");
    añoNacimiento = parseInt(prompt("Ingrese su año de nacimiento"));
}

let edad = (2024 - añoNacimiento);

console.log("Su edad es " + edad);