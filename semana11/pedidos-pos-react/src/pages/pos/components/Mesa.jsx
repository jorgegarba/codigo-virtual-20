import PropTypes from 'prop-types';
import { useContext } from 'react';
import { PosContext } from '../context/PosState';

const Mesa = (props) => {
	const { nro, id } = props;
	const { setMesaSeleccionada, mesaSeleccionada } = useContext(PosContext);

	return (
		<li
			className={`mesas__mesa ${mesaSeleccionada.id === id ? 'activo' : ''}`}
			onClick={() => setMesaSeleccionada({ nro: nro, id: id })}
		>
			<span className="mesas__titulo">Mesa</span>
			<span className="mesas__numero">{nro}</span>
		</li>
	);
};

Mesa.propTypes = {
	nro: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired
};

export default Mesa;
