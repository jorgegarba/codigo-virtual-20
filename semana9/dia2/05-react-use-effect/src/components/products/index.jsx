import axios from 'axios';
import { URL_API_STORE } from '../../constants';
import { useEffect, useState } from 'react';

const Products = () => {
	const [productos, setProductos] = useState([]);
	const [limit, setLimit] = useState(5);

	const getProducts = async () => {
		const response = await axios.get(
			`${URL_API_STORE}/products?limit=${limit}`
		);
		setProductos(response.data);
	};

	console.log('hola');

	useEffect(() => {
		console.log('ejecutando useEffect');
		getProducts();
	}, [limit]);

	return <div></div>;
};

export default Products;
