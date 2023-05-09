import { categoriasArray } from '../../../mock/fakeData';
import Categoria from './Categoria';

const Categorias = () => {
	return (
		<nav className="menu">
			<ul className="menu__lista">
				{categoriasArray.map((categoriaObj, i) => (
					<Categoria
						key={i}
						id={categoriaObj.id}
						nombre={categoriaObj.nombre}
					/>
				))}
			</ul>
		</nav>
	);
};

export default Categorias;
