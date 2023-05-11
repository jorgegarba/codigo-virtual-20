import { useContext } from 'react';
import Categoria from './Categoria';
import { PosContext } from '../context/PosState';

const Categorias = () => {
	const {
		categoriasAPI: { data: categoriasArray, cargandoCategorias }
	} = useContext(PosContext);
	return (
		<nav className="menu">
			<ul className="menu__lista">
				{cargandoCategorias ? (
					<div>cargando...</div>
				) : (
					categoriasArray.map((categoriaObj, i) => (
						<Categoria
							key={i}
							id={categoriaObj.id}
							nombre={categoriaObj.nombre}
						/>
					))
				)}
			</ul>
		</nav>
	);
};

export default Categorias;
