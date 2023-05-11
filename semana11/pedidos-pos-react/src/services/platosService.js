import axios from 'axios';
import { URL_BACKEND_PLATOS } from '../constants';

export const getPlatos = async () => {
	const response = await axios.get(`${URL_BACKEND_PLATOS}/platos`);
	return response.data;
};
