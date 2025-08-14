//variables
let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = "vez"
let maximosIntentos = 6
console.log (numeroSecreto)
//bucle
while (numeroUsuario != numeroSecreto) {

numeroUsuario = parseInt(prompt(`Dime un numero del 1 al ${numeroMaximoPosible}`));

console.log(numeroUsuario);
/* el siguiente codigo compara las variantes*/
//al final de la linea 16 se implementa ? funciona como if y : funciona como else
if (numeroUsuario == numeroSecreto) {alert (`Bien hecho el numero es: ${numeroUsuario} Lo hiciste en ${intentos} ${intentos == 1 ? "vez" : "veces"}`);}
else {if (numeroUsuario > numeroSecreto) {alert ("El numero es menor");} else {alert("El numero es mayor");}
//maneras de incrementar el contador
//intentos = intentos + 1;
//intentos += intentos;
intentos++;
//let palabraVeces = "veces"
//en la siguiente linea implementamos break para salir del bucle cuando se cumplan las condiciones
if (intentos > maximosIntentos) {alert(`game over llegaste al numero max de intentos ${maximosIntentos}`);
 break;
}
}
}
{

}