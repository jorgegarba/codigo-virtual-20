import PropTypes from 'prop-types';

const BoletaItem = (props) => {
	const { platoObj } = props;
	return (
		<li className="comanda__item">
			<p className="comanda__nombre">
				<span>
					<strong>{platoObj.nombre}</strong>
				</span>
				<span>Precio: S/ {platoObj.precio}</span>
			</p>
			<p className="comanda__cantidad">{platoObj.cantidad}</p>
			<p className="comanda__precio">
				<strong>S/ {platoObj.precio * platoObj.cantidad}</strong>
			</p>
		</li>
	);
};

BoletaItem.propTypes = {
	platoObj: PropTypes.object.isRequired
};

export default BoletaItem;
