//ej 39 Pide al usuario que ingrese su mes de nacimiento y muestra su signo zodiacal en la consola.

let mesDeNacimiento;

//switch(valor con el q trabaja){case n: codigo}

//se le debe aplicar un do/while para realizar la validacion y hasta que no cumpla la condicion del promp no acabe el ciclo

//condicion del promp - mes sea numerico, 1<mes>12 

//validación ((isNaN(mesDeNacimiento)) && (mesDeNacimiento >= 1 || mesDeNacimiento <= 12) );

do{
    mesDeNacimiento = parseInt(prompt("Ingrese su mes de nacimiento numericamente (1-12)"));
    if(isNaN(mesDeNacimiento) && mesDeNacimiento < 1 || mesDeNacimiento > 12){
        alert("Porfavor ingrese un valor númerico del 1 al 12");
    }
}while((isNaN(mesDeNacimiento)) && (mesDeNacimiento < 1 || mesDeNacimiento > 12));

//el ciclo do/while se va a seguir haciendo hasta que el usuario no ponga bien el dato solicitado

switch(mesDeNacimiento){
    case 1:
        console.log("capricornio o acuario");
        break;
    case 2:
        console.log("acurio o piscis");
        break;
    case 3:
        console.log("piscis o aries");
        break;
    case 4:
        console.log("aries o tauro");
        break;
    case 5:
        console.log("tauro o geminis");
        break;
    case 6:
        console.log("geminis o cancer");
        break;
    case 7:
        console.log("cancer o leo");
        break;
    case 8:
        console.log("leo o virgo");
        break;
    case 9:
        console.log("virgo o libra");
        break;
    case 10:
        console.log("libra o escorpio");
        break;
    case 11:
        console.log("escorpio o sagitario");
        break;
    case 12:
        console.log("sagitario o capricornio");
        break;
    default:
        console.log("Porfavor ingrese un valor númerico del 1 al 12");
}

//Porque no se ejecuta la alerta del DO?