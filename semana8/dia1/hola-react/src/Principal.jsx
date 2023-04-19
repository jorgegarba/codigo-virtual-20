import Articulo from './Articulo';

function Principal() {
	const articulo1 = {
		titulo: 'Articulo 1',
		imagen: 'https://placehold.co/300',
		desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, fuga explicabo porro mollitia quibusdam libero? Iste impedit  repellendus, accusantium temporibus necessitatibus voluptate,  consequatur sunt odit vero dolorem beatae laborum libero.'
	};
	const articulo2 = {
		titulo: 'Articulo 2',
		imagen: 'https://placehold.co/250',
		desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, fuga explicabo porro mollitia quibusd'
	};
	const articulo3 = {
		titulo: 'Articulo 3',
		imagen: 'https://placehold.co/250',
		desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, fuga explicabo porro mollitia quibusd'
	};

	return (
		<div>
			<h2>Articulos detallados</h2>
			<Articulo info={articulo1} />
			<Articulo info={articulo2} />
			<Articulo info={articulo3} />
		</div>
	);
}
export default Principal;
