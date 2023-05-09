import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const PosContext = createContext();

const PosState = (props) => {
	const { children } = props;

	/**
	 * { id:number, nro:string }
	 */
	const [mesaSeleccionada, setMesaSeleccionada] = useState({ nro: '', id: 0 });
	const [categoriaSeleccionada, setCategoriaSeleccionada] = useState({
		id: 0,
		nombre: ''
	});

	return (
		<PosContext.Provider
			value={{
				mesaSeleccionada: mesaSeleccionada,
				setMesaSeleccionada: setMesaSeleccionada,
				categoriaSeleccionada: categoriaSeleccionada,
				setCategoriaSeleccionada: setCategoriaSeleccionada
			}}
		>
			{children}
		</PosContext.Provider>
	);
};

PosState.propTypes = {
	children: PropTypes.node.isRequired
};

export default PosState;
