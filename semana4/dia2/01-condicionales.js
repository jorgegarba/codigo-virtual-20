// Ejercicio.
/**
 * Dados 3 números enteros, evaluar el mayor de todos
 */

const n1 = 81;
const n2 = 20;
const n3 = 80;

if (n1 > n2) {
	if (n1 > n3) {
		console.log('El mayor es ', n1);
	} else {
		console.log('El mayor es', n3);
	}
} else {
	if (n2 > n3) {
		console.log('El mayor es', n2);
	} else {
		console.log('El mayor es', n3);
	}
}

/**
 * Ejercicio
 * Dado un año, ejm: 2020, Evaluar si ese año es bisiesto
 * Es bisiesto sí:
 * es divisible entre 4 y no entre 100
 * ó que es divisible entre 400
 */

const anio = 2023;

if ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0) {
	console.log(anio, 'es bisiesto');
} else {
	console.log(anio, 'no es bisiesto');
}
