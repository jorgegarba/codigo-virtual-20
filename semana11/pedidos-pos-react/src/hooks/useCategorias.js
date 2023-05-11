import { useEffect, useState } from 'react';
import { getCategorias } from '../services/categoriasService';

export const useCategorias = () => {
	const [categorias, setCategorias] = useState([]);
	const [cargandoCategorias, setCargandoCategorias] = useState(true);

	useEffect(() => {
		getCategorias().then((data) => {
			setCategorias(data);
			setCargandoCategorias(false);
		});
	}, []);

	return {
		categorias: categorias,
		cargandoCategorias: cargandoCategorias
	};
};
