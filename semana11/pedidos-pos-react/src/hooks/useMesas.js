import { useEffect, useState } from 'react';
import { getMesas } from '../services/mesasService';

export const useMesas = () => {
	const [mesas, setMesas] = useState([]);
	const [cargandoMesas, setCargandoMesas] = useState(true);

	useEffect(() => {
		getMesas().then((data) => {
			setMesas(data);
			setCargandoMesas(false);
		});
	}, []);

	return {
		mesas: mesas,
		cargandoMesas: cargandoMesas
	};
};
