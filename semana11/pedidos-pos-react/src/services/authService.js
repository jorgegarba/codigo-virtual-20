import axios from 'axios';
import { URL_BACKEND_AUTH } from '../constants';

export const postLogin = async (objeto) => {
	const response = await axios.post(`${URL_BACKEND_AUTH}/auth/login`, objeto, {
		headers: {
			'Content-Type': 'application/json'
		}
	});
	return response.data;
};

export const getValidarSession = async () => {
	const token = localStorage.getItem('token');
	if (token) {
		const response = await axios.get(`${URL_BACKEND_AUTH}/auth/profile`, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});
		return response.data;
	} else {
		throw 'no existe un token';
	}
};
