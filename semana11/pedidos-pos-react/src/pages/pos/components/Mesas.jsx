import { useContext } from 'react';
import Mesa from './Mesa';
import { PosContext } from '../context/PosState';

const Mesas = () => {
	const {
		mesasAPI: { data: mesasArray, cargandoMesas }
	} = useContext(PosContext);

	return (
		<div className="mesas">
			<ul className="mesas__lista">
				{cargandoMesas ? (
					<div>cargando...</div>
				) : (
					mesasArray.map((mesaObj, i) => (
						<Mesa key={i} id={mesaObj.id} nro={mesaObj.nro} />
					))
				)}
			</ul>
			<div className="mesas__info"></div>
		</div>
	);
};

export default Mesas;
