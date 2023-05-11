import { useContext } from 'react';
import { PosContext } from '../context/PosState';
import BoletaItem from './BoletaItem';
import { getPlatoByPlatoId } from '../utils';

const Boleta = () => {
	const {
		mesaSeleccionada,
		pedidos,
		platosAPI: { data: platos }
	} = useContext(PosContext);

	/**
	 * [
	 *  {id:1,nombre:"chaufa",cantidad:6,precio:20,url:"https://www..."}
	 * ]
	 */
	let platosActuales = [];
	if (mesaSeleccionada.nro) {
		const pedidoMesaActual = pedidos.find(
			(pedido) => pedido.mesaId === mesaSeleccionada.id
		);
		if (pedidoMesaActual) {
			platosActuales = pedidoMesaActual.platos.map((plato) => {
				return {
					...plato,
					...getPlatoByPlatoId(plato.platoId, platos)
				};
			});
			console.log('platosActuales', platosActuales);
		}
	}

	return (
		<div className="boleta">
			<h3>
				Pedido Mesa: &nbsp;
				<span className="color-secundario">{mesaSeleccionada.nro}</span>
			</h3>
			<hr />
			<div className="comanda">
				<h4 className="comanda__mesa">Mesa {mesaSeleccionada.nro}</h4>
				<p className="comanda__usuario">Carlos Jimenez</p>
				<hr />

				<ul className="comanda__lista">
					{platosActuales.map((plato, i) => {
						return <BoletaItem key={i} platoObj={plato} />;
					})}
				</ul>
				<button className="boton boton-success boton-block">PAGAR</button>
			</div>
		</div>
	);
};

export default Boleta;
