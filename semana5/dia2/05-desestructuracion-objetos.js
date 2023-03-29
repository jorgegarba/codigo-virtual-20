const producto = {
	nombre: 'iPhone 14 pro',
	precio: 5500,
	codigo: 5,
	stock: 80,
	colores: ['negro', 'azul', 'rojo']
};

/**
 * Una forma correcta de copiar o clonar
 * un objeto sería la siguiente
 */

const producto2 = { ...producto };

/**
 * desestructuando atributos
 */

const { codigo, precio, ...rest } = producto;
console.log('codigo', codigo);
console.log('precio', precio);
console.log('rest', rest);

/**
 * desestructurando atributos con nuevos nombres
 * de variables
 */

const { precio: precioProducto } = producto;

console.log('precio producto', precioProducto);

// Ejemplo
const random = (atributos) => {
	const { min, max } = atributos;
	return Math.random() * (max - min) + min;
};

let maxYMin = {
	max: 200,
	min: 100
};

console.log(random(maxYMin));
