import { useEffect, useState } from 'react';
import { getPlatos } from '../services/platosService';

export const usePlatos = () => {
	const [platos, setPlatos] = useState([]);
	const [cargandoPlatos, setCargandoPlatos] = useState(true);

	useEffect(() => {
		getPlatos().then((data) => {
			setPlatos(data);
			setCargandoPlatos(false);
		});
	}, []);

	return {
		platos: platos,
		cargandoPlatos: cargandoPlatos
	};
};
