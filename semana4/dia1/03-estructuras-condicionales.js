// Estructuras condicionales
const edad = 18;

if (edad >= 18) {
	console.log('Ya es mayor de edad');
} else {
	console.log('Aún es menor de edad');
}

console.log('------ ejercicio --------');
// Hacer un algoritmo para aplicar un descuento
// del 15% de la compra total si y sólo sí
// el día de la semana es martes.
// en caso contrario, no aplicar ningún descuento

// OJO: no usar sentencia else

const dia = 'jueves';
const totalComprado = 800;
let resultado = totalComprado;

if (dia === 'martes') {
	resultado = totalComprado - totalComprado * 0.15;
}

console.log('Total a pagar ', resultado);

console.log('----------ejercicio------');
// Modificar el anterior ejercicio, para que el descuento,
// se realice sí y sólo sí, es día "martes" y el valor de compra
// excede los 1000 soles

if (dia === 'martes') {
	if (totalComprado > 1000) {
		resultado = totalComprado - totalComprado * 0.15;
	} else {
		console.log('Es martes pero no califica por compras menores a 1000 ');
	}
} else {
	console.log('No califica por no ser martes');
}

console.log('Total a pagar', resultado);

console.log('----------- operador and &&');

if (dia === 'martes' && totalComprado > 1000) {
	resultado = totalComprado - totalComprado * 0.15;
} else {
	console.log('No califica');
}
