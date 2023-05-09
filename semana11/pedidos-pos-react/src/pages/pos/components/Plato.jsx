import PropTypes from 'prop-types';

const Plato = (props) => {
	const { platoObj } = props;

	return (
		<div className="carta__plato">
			<img src={platoObj.url} alt="" />
			<h4 className="carta__titulo">{platoObj.nombre}</h4>
			<span className="carta__precio">S/ {platoObj.precio}</span>
			<div className="carta__botones">
				<button className="boton boton-outline-primary boton-restar">-1</button>
				<button className="boton boton-outline-primary boton-sumar">+1</button>
			</div>
		</div>
	);
};

Plato.propTypes = {
	platoObj: PropTypes.object.isRequired
};
export default Plato;
