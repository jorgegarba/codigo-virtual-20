/**
 * Ejercicio 3.6
 *
 */

const nroPersonas = 50;
let total = 0;
let costoPlato = 0;

if (nroPersonas > 200 && nroPersonas <= 300) {
	costoPlato = 85;
} else {
	if (nroPersonas > 300) {
		costoPlato = 75;
	} else {
		costoPlato = 95;
	}
}

total = costoPlato * nroPersonas;
console.log('Total a pagar para ' + nroPersonas + ' personas: ' + total);

/**
 * Ejercicio 3.8
 */
console.log('--- ejercico 3.8 ---');
const nroAlumnos = 200;
let costoBus = 0;

if (nroAlumnos >= 100) {
	costoBus = nroAlumnos * 65;
} else {
	if (nroAlumnos >= 50) {
		costoBus = nroAlumnos * 70;
	} else {
		if (nroAlumnos >= 30) {
			costoBus = nroAlumnos * 95;
		} else {
			costoBus = 4000;
		}
	}
}

console.log('Total a pagar por ' + nroAlumnos + ': S/' + costoBus);

/**
 * Ejercicio propuesto 3.9
 */
console.log('--- Ejercicio 3.9 ---');
const planA = 1200;
const planB = 950;
let totalPagar = 0;
const planElegido = prompt('¿qué plan desea? escriba a (Plan A) ó b (PlanB)');
const alcohol = confirm('¿Toma alcohol?');
const lentes = confirm('¿Usted usa lentes?');
const enfermedad = confirm('¿Padece usted de alguna enfermedad?');
const edad = +prompt('Ingrese su edad');
let precioBase = 0;

if (planElegido === 'a') {
	precioBase = planA;
} else {
	precioBase = planB;
}
totalPagar = precioBase;

if (alcohol) {
	totalPagar = totalPagar + 0.1 * precioBase;
}
if (lentes) {
	totalPagar = totalPagar + 0.05 * precioBase;
}
if (enfermedad) {
	totalPagar = totalPagar + 0.05 * precioBase;
}

if (edad > 40) {
	totalPagar = totalPagar + 0.2 * precioBase;
} else {
	totalPagar = totalPagar + 0.1 * precioBase;
}

console.log('Su cuenta joven: ' + totalPagar + ' soles');
