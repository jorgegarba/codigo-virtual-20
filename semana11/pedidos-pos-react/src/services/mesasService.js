import axios from 'axios';
import { URL_BACKEND } from '../constants';

export const getMesas = async () => {
	const response = await axios.get(`${URL_BACKEND}/mesas`);
	return response.data;
};
