import { mesasArray } from '../../../mock/fakeData';
import Mesa from './Mesa';

const Mesas = () => {
	// TODO obtener las mesas de la API de POS
	return (
		<div className="mesas">
			<ul className="mesas__lista">
				{mesasArray.map((mesaObj, i) => (
					<Mesa key={i} id={mesaObj.id} nro={mesaObj.nro} />
				))}
			</ul>
			<div className="mesas__info"></div>
		</div>
	);
};

export default Mesas;
