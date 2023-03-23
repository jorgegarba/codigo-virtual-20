/**
 * Tabla de multiplicar de un numero n
 * 1-12
 */

const n = 7;
for (let i = 1; i <= 12; i++) {
	console.log(n + ' x ' + i + ' = ' + n * i);
}

/**
 * Ejercicio
 * Obtener la multiplicación de 2 números a*b
 * - No usar el símbolo de multiplicación *
 * - Usar sólamente sumas
 * - Usar el ciclo for obvi
 */
console.log('---ejercicio de multiplicación');
const n1 = 5;
const n2 = 9;
let suma = 0;

for (let i = 1; i <= n1; i++) {
	suma = suma + n2;
}

console.log('resultado ' + suma);

/**
 * Un usuario ingresará 5 números; de todos ellos
 * se desean saber
 * - cantidad de nros positivos
 * - cantidad de nros negativos
 * - cantidad de nros iguales a cero
 */

let pos = 0;
let neg = 0;
let cer = 0;
let ingreso = undefined;
for (let i = 0; i <= 4; i++) {
	ingreso = +prompt('Ingrese un número joven');
	if (ingreso > 0) {
		pos = pos + 1;
	} else if (ingreso === 0) {
		cer = cer + 1;
	} else {
		neg = neg + 1;
	}
}
console.log('Cantidad de positivos: ', pos);
console.log('Cantidad de negativos: ', neg);
console.log('Cantidad de ceros: ', cer);
