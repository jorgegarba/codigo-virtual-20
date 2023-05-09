import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../Context/UserContext';
import { Navigate, Outlet } from 'react-router-dom';

const Private = () => {
	const { user } = useContext(UserContext);
	if (!user) {
		return <Navigate to="/" />;
	}

	return <Outlet />;
};

export default Private;
