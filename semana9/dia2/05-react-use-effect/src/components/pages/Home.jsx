import { useContext, useEffect } from 'react';
import Products from '../products';
import Cart from '../cart';
import { UserContext } from '../context/ContextCarrito';

const Home = () => {
	//1. se usa el custom hook usecarrito para obtner las func las variabes
	const { carrito } = useContext(UserContext);
	//2 este useEddfet sde usa poara guarad el carrito en el lcalsrtorage
	//el use efect se ejecuta cada vez qeu se actualize el estado del carrito
	useEffect(() => {
		//el primer valor del localstorage setitewm es el nombdre de la vairbale quue se quiere guaradr
		localStorage.setItem('carrito', JSON.stringify(carrito)); //se usa le metodo setitem pára guaradr el carrito en localstorage
	}, [carrito]);

	return (
		<div className="container-fluid py-5">
			<div className="row">
				<div className="col-md-2">Filtrador</div>
				<div className="col-md-7">
					<Products />
				</div>
				<div className="col-md-3">
					<Cart />
				</div>
			</div>
		</div>
	);
};

export default Home;
