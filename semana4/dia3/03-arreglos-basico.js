const nro = 2;
const nombre = 'asd';
const casado = true;
const libros = ['HP1', 'HP2', 'HP3'];
console.log(libros);
console.log(libros[2]);

const notas = [7, 5, 3, 13, 6, 12];
console.log('notas' + notas);
console.log('suma de la 1ra con la ultima', notas[0] + notas[5]);
// reasignacion de un elemento
notas[4] = 20;
console.log('notas nuevas', notas);

// propiedades
console.log('Cantidad de libros');
console.log(libros.length);

console.log('cantidad de notas');
console.log(notas.length);

libros.push('Aves sin nido');
console.log(libros);

// recorriendo un arreglo
let acumulador = 0;
for (let i = 0; i < notas.length; i++) {
	acumulador = acumulador + notas[i];
}
console.log('acumulador', acumulador);

// Ejercicio:
// ¿cuántos números del arreglo de notas son pares?
// ¿cuántos números del arreglo de notas son impares?

let pares = 0;
let impares = 0;
for (let i = 0; i < notas.length; i++) {
	if (notas[i] % 2 === 0) {
		pares++;
	} else {
		impares++;
	}
}

console.log('Total pares', pares);
console.log('Total impares', impares);

// Ejercicio mejorado RETO
// al enunciado anterior, imprimir también,
// qué numeros son pares y qué números son impares
// OJO imprimir al final, NO en cada iteración.
