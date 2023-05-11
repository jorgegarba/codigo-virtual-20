import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
	return (
		<div>
			AdminLayout
			<hr />
			<hr />
			<hr />
			<Outlet />
		</div>
	);
};

export default AdminLayout;
