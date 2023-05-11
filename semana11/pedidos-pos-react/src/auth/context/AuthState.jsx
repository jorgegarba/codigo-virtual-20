import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getValidarSession } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

const AuthState = ({ children }) => {
	const [autenticado, setAutenticado] = useState(false);
	const [cargando, setCargando] = useState(true);

	const navigate = useNavigate();
	const guardarToken = (token) => {
		localStorage.setItem('token', token);
		setCargando(true);
		getValidarSession()
			.then((data) => {
				if (data.id) {
					setAutenticado(true);
					navigate('/admin/pos');
				}
			})
			.catch(() => {})
			.finally(() => {
				setCargando(false);
			});
	};

	useEffect(() => {
		setCargando(true);
		getValidarSession()
			.then((data) => {
				if (data.id) {
					setAutenticado(true);
				}
			})
			.catch(() => {})
			.finally(() => {
				setCargando(false);
			});
	}, []);

	const cerrarSesion = () => {
		localStorage.removeItem('token');
		navigate('/public/login');
	};

	return (
		<AuthContext.Provider
			value={{
				autenticado: autenticado,
				guardarToken: guardarToken,
				cargando: cargando,
				cerrarSesion: cerrarSesion
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

AuthState.propTypes = {
	children: PropTypes.node.isRequired
};
export default AuthState;
