/**
 * Debemos encadenar promesas SI y SÓLO SI una depende de la otra
 */

const categorias = [
	{ id: 1, name: 'terror' },
	{ id: 2, name: 'comedia' },
	{ id: 3, name: 'accion' }
];

const peliculas = [
	{ categoria: 'comedia', titutlo: 'El tonto y el más tonto' },
	{ categoria: 'comedia', titutlo: 'La máscara' },
	{ categoria: 'terror', titutlo: 'La monja' },
	{ categoria: 'terror', titutlo: 'Actividad Paranormal' },
	{ categoria: 'accion', titutlo: 'Terminator I' },
	{ categoria: 'accion', titutlo: 'Rápidos y Curiosos' }
];

const getCategoriaById = (id) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const categoriaEncontrada = categorias.find((c) => c.id === id);
			if (categoriaEncontrada) {
				resolve(categoriaEncontrada.name);
			} else {
				reject('nay');
			}
		}, 2000);
	});
};

const getPeliculasByCategoria = (name) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const pelis = peliculas.filter((p) => name === p.categoria);
			// .map((p) => p.titutlo);
			resolve(pelis);
		}, 2000);
	});
};

// SUPONER QUE YO SÓLO DISPONGO DE UN DATO
// el id del genero del cual quiero obtener las películas

const id = 2;

getCategoriaById(id)
	.then((categoria) => {
		console.log(categoria, 'categoria');
		getPeliculasByCategoria(categoria).then((pelis) => {
			console.log(pelis, 'pelis');
		});
	})
	.catch((error) => {
		console.log('error', error);
	});

// Forma 2 de encadenar promesas

getCategoriaById(id)
	.then((nombreDeCategoria) => {
		return getPeliculasByCategoria(nombreDeCategoria);
	})
	.then((pelisEncontradas) => {
		console.log('pelisEncontradas', pelisEncontradas);
	})
	.catch((errorGenerico) => {
		console.log('errorGenerico', errorGenerico);
	});
