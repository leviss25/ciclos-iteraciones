let cadena; 
let num1;
console.log("*************************************");
console.log("| INGRESA UN NUMERO                 |");
console.log("| SI ES MAYOR QUE 1000 SE DUPLICARÁ |");
console.log("| SI ES MENOR QUE 1000 SE DIVIDIRÁ  |");
console.log("*************************************");
do {
    //solicitamos entrada de cadena
    cadena = prompt("Ingresa un número para validar:");
    //convertimos cadena a numero
    num1 = parseInt(cadena);
} while (Number.isNaN(num1) || (cadena.length != num1.toString().length));//mientras no sea un numero o si es un numero combinado con letras rechazamos
//Operamos si es un número
if (num1 > 1000) {
    console.log(num1+" es un número mayor que 1000 y el doble de " + num1 + " es "+ num1*2);
}
else{
    console.log(num1+" es un número menor que 1000 y la mitad de " + num1 + " es " + num1/2);
} 

console.log("************* MENÚ *************");
console.log("| 1 - Calcular suma            |");
console.log("| 2 - Calcular resta           |");
console.log("| 3 - Calcular división        |");
console.log("| 4 - Calcular multiplicación  |");
console.log("| ESC - Salir                  |");
console.log("*******************************");
let entrada = prompt("Ingrese un número según el MENÚ");
let numero1;
let numero2;
while (entrada != "ESC" && (parseInt(entrada)>0 && parseInt(entrada)<=5)) {
    numero1 = parseFloat(prompt("Ingrese primer número:"));
    numero2 = parseFloat(prompt("Ingrese segundo número:"));
    switch (entrada) {
        case "1":
            console.log("SUMA: "+numero1+ " + "+ numero2 + " = "+ (numero1+numero2));
            break;
        case "2":
            console.log("RESTA: "+numero1+ " - "+ numero2 + " = "+ (numero1 - numero2));
            break;
        case "3":
            console.log("DIVISIÓN: "+numero1+ " / "+ numero2 + " = "+ (numero1/numero2));
            break;
        case "4":
            console.log("MULTIPLICACIÓN: "+numero1+ " X "+ numero2 + " = "+ (numero1*numero2));
            break;
    }
    entrada = prompt("Ingrese un número según el MENÚ");
}

console.log("*************************************");
console.log("| PROMEDIO DE N NÚMEROS             |");
console.log("*************************************");

let n = parseInt(prompt("Ingrese la cantidad de números a promediar:"));
let promedio = 0;
let NumeroTexto;
let respuesta = "El promedio de ";
for (let i = 1; i <= n; i++) {
    NumeroTexto = prompt("Ingrese número " + i + ":");
    respuesta = respuesta + NumeroTexto+",";
    promedio = promedio + parseFloat(NumeroTexto);
}
promedio = promedio / n;
console.log(respuesta + " es: " + promedio);