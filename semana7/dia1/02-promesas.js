/**
 * Las promesas tiene 2 partes importantes
 * 1. Creación de la promesa
 * 2. Consumo de la promesa
 * Por lo general, nosotros consumiremos promesas, pocas veces
 * las crearemos
 */

const miPromesa = new Promise((resolve, reject) => {
	setTimeout(() => {
		const aleatorio = Math.round(Math.random() * (100 - 0) + 0);
		if (aleatorio % 2 === 0) {
			resolve('exitoso!');
		} else {
			reject('error 404');
		}
	}, 2000);
});

/**
 * 2. Consumo de una promesa
 * promesa.then(()=>{})
 * then es el método que recibe un callback con la data que la promesa
 * nos retorna cuando dicha promesa sea exitosa
 *
 * promesa.catch(()=>{})
 * catch es un método que recibe un callback con el error que la promesa
 * retorna cuando promesa falla en el intento
 */

miPromesa
	.then((data) => {
		console.log('data', data);
	})
	.catch((error) => {
		console.log('error', error);
	})
	.finally(() => {
		console.log('la verdadera despedida');
	});

console.log('despedida');
