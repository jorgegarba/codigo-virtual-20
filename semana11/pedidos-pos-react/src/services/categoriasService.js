import axios from 'axios';
import { URL_BACKEND } from '../constants';

export const getCategorias = async () => {
	const response = await axios.get(`${URL_BACKEND}/categorias`);
	return response.data;
};
