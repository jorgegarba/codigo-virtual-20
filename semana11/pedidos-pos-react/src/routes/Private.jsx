import { Navigate } from 'react-router-dom';

const Private = (props) => {
	const { children } = props;
	// JWT
	const autenticado = true;
	return autenticado ? children : <Navigate to="/public/login" />;
};

export default Private;