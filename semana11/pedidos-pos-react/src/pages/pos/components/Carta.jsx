import { useContext } from 'react';
import Plato from './Plato';
import { PosContext } from '../context/PosState';
import { platosArray } from '../../../mock/fakeData';

const Carta = () => {
	const { categoriaSeleccionada } = useContext(PosContext);
	const platosDisponibles = platosArray.filter(
		(platoObj) => platoObj.categoriaId === categoriaSeleccionada.id
	);

	return (
		<div className="carta">
			<h3>
				{categoriaSeleccionada.nombre ? (
					<>Lista de Platos Categoria: &nbsp;</>
				) : (
					'Seleccione una categoría del menú de la izquierda'
				)}

				<span className="color-secundario">
					{categoriaSeleccionada.nombre.toUpperCase()}
				</span>
			</h3>

			<div className="carta__platos">
				{platosDisponibles.map((platoObj, i) => (
					<Plato key={i} platoObj={platoObj} />
				))}
			</div>
		</div>
	);
};

export default Carta;
