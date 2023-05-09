import { useContext } from 'react';
import { PosContext } from '../context/PosState';
import BoletaItem from './BoletaItem';

const Boleta = () => {
	const { mesaSeleccionada } = useContext(PosContext);

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
					<BoletaItem />
					<BoletaItem />
					<BoletaItem />
					<BoletaItem />
				</ul>
				<button className="boton boton-success boton-block">PAGAR</button>
			</div>
		</div>
	);
};

export default Boleta;
