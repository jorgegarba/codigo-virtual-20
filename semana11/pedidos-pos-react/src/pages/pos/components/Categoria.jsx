import PropTypes from 'prop-types';
import { useContext } from 'react';
import { PosContext } from '../context/PosState';

const Categoria = (props) => {
	const { nombre, id } = props;
	const { categoriaSeleccionada, setCategoriaSeleccionada } =
		useContext(PosContext);

	return (
		<li
			className={categoriaSeleccionada.id === id ? 'active' : ''}
			onClick={() => setCategoriaSeleccionada({ id: id, nombre: nombre })}
		>
			<img src="./img/plato_blanco.svg" alt="" />
			<span>{nombre}</span>
		</li>
	);
};

Categoria.propTypes = {
	id: PropTypes.number.isRequired,
	nombre: PropTypes.string.isRequired
};

export default Categoria;
