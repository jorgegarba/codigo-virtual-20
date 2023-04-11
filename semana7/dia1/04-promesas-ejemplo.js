const url = 'https://fakestoreapi.com/products';
const contenedor = document.querySelector('#contenedor');

const obtenerProductos = () => {
	axios.get(url).then((response) => {
		console.log('response', response.data);
		dibujarProductos(response.data);
	});
};

const dibujarProductos = (productos = []) => {
	productos.forEach((prod) => {
		const columna = document.createElement('div');
		columna.classList.add('col-md-3');
		columna.innerText = prod.title;
		contenedor.appendChild(columna);
		// TODO: completar la tarea
	});
};

obtenerProductos();
