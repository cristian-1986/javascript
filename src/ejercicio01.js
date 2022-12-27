
/*
function factorial (numero){
    if (numero == 0) {
        return 1;
    } else {
        return factorial(numero-1) * numero;
    }
}

console.log (factorial(4));

let total = 0, cuenta = 1;
while (cuenta <= 10) {
total += cuenta;
cuenta += 1;
}
console.log(total);

console.log(8 * null)
// → 0
console.log("5" - 1)
// → 4
console.log("5" + 1)
// → 51
console.log("cinco" * 2)
// → NaN
console.log(false == 0)
// → true
*/

const prompt = require("prompt-sync")({ sigint: true});
var elNumero = parseInt(prompt("Elige un numero: "));
console.log("número es la raiz cuadrada de " + elNumero * elNumero);

