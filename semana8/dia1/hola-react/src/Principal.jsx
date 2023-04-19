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

	const articulos = [articulo1, articulo2, articulo3];

	// crear un arreglo de componentes articulo con cada articulo independiente
	const resultado = articulos.map((art) => {
		return <Articulo info={art} />;
	});

	const elemento = [
		<Articulo info={articulo1} />,
		<Articulo info={articulo2} />
	];

	return (
		<div>
			<h2>Articulos detallados</h2>

			{resultado}

			<Articulo info={articulo1} />
			<Articulo info={articulo2} />
			<Articulo info={articulo3} />
			{elemento}
		</div>
	);
}
export default Principal;
