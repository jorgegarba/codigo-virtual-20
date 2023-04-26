import { useState } from 'react';
import Products from './components/products';
import Cart from './components/cart';
const App = () => {
	const [carrito, setCarrito] = useState([]);

	const agregarAlCarrito = (item) => {
		console.log('agreando algo al carrito');
		console.log(item);
	};

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-2">FILTRADOR</div>
				<div className="col-md-7">
					<Products agregarAlCarrito={agregarAlCarrito} />
				</div>
				<div className="col-md-3">
					<Cart />
				</div>
			</div>
		</div>
	);
};

export default App;
