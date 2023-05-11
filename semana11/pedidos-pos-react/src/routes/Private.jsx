import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../auth/context/AuthState';

const Private = ({ children }) => {
	const { autenticado, cargando } = useContext(AuthContext);

	if (cargando) return <div>Cargando...</div>;
	return autenticado ? children : <Navigate to="/public/login" />;
};
Private.propTypes = {
	children: PropTypes.node.isRequired
};
export default Private;
