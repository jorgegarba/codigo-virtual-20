import { Route, BrowserRouter, Routes } from 'react-router-dom';
// import AdminLayout from '../layouts/AdminLayout';
import PlatosAdmin from '../pages/platosadmin';
import PosPage from '../pages/pos';
import PosState from '../pages/pos/context/PosState';
import Login from '../pages/auth/Login';
import Private from './Private';

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				{/* <Route path="/admin" element={<AdminLayout />}> */}
				<Route
					path="/admin/platos"
					element={
						<Private>
							<PlatosAdmin />
						</Private>
					}
				/>
				<Route
					path="/admin/pos"
					element={
						<Private>
							<PosState>
								<PosPage />
							</PosState>
						</Private>
					}
				/>
				<Route path="/public/login" element={<Login />} />

				{/* </Route> */}
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
