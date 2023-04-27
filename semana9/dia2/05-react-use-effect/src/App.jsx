import { useEffect, useState } from 'react';
import Products from './components/products';
import Cart from './components/cart';

const App = () => {
	const [carrito, setCarrito] = useState(
		JSON.parse(localStorage.getItem('carrito')) || []
	);

	const agregarAlCarrito = (item) => {
		const copiaCarrito = [...carrito];
		// 1. verificar si el item ya existía en el carrito.
		const itemEncontrado = copiaCarrito.find((prod) => prod.id === item.id);
		if (itemEncontrado) {
			// 2. significa que item es diferente de undefined y que por ende, ya
			// existía
			itemEncontrado.cant += 1;
			setCarrito(copiaCarrito);
		} else {
			// 2. el item no existía, por ende, itemEncontrado = undefined
			const nuevoItemAlCarrito = { ...item };
			nuevoItemAlCarrito.cant = 1;
			copiaCarrito.push(nuevoItemAlCarrito);
			setCarrito(copiaCarrito);
		}
	};

	const eliminarDelCarrito = (id) => {
		const copiaCarrito = [...carrito];
		const nuevosProductos = copiaCarrito.filter((prod) => prod.id !== id);
		setCarrito(nuevosProductos);
	};

	const guardarCarrito = () => {
		localStorage.setItem('carrito', JSON.stringify(carrito));
	};

	useEffect(() => {
		guardarCarrito();
	}, [carrito]);

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-2">FILTRADOR</div>
				<div className="col-md-7">
					<Products agregarAlCarrito={agregarAlCarrito} />
				</div>
				<div className="col-md-3">
					<Cart carrito={carrito} eliminarDelCarrito={eliminarDelCarrito} />
				</div>
			</div>
		</div>
	);
};

export default App;
