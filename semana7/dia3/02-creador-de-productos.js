const nombre = document.getElementById('nombre');
const imagen = document.getElementById('imagen');
const precio = document.getElementById('precio');
const stock = document.getElementById('stock');
const botonCrear = document.getElementById('botonCrear');

const crearProducto = async (producto) => {
	const URL = 'https://64376df80c58d3b145712b2c.mockapi.io/producto';
	const response = await fetch(URL, {
		method: 'POST',
		body: JSON.stringify(producto),
		// cuando incluimos información en el body, debemos especificar en los headers
		// el tipo de datos que enviamos en el body. así el servidor podrá desserializar
		// correctamente la info enviada, porque podría ser un JSON o una imagen o un XML etc
		headers: {
			'Content-Type': 'application/json'
		}
	});
	const data = await response.json();
	console.log('data', data);
};

botonCrear.onclick = function () {
	const objetoProducto = {
		nombre: nombre.value,
		stock: +stock.value,
		precio: +precio.value,
		img: imagen.value
	};
	crearProducto(objetoProducto);
};
