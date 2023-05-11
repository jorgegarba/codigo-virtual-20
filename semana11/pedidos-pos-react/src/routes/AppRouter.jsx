import { Route, HashRouter, Routes } from 'react-router-dom';
// import AdminLayout from '../layouts/AdminLayout';
import PlatosAdmin from '../pages/platosadmin';
import PosPage from '../pages/pos';
import PosState from '../pages/pos/context/PosState';
import Login from '../pages/auth/Login';
import Private from './Private';
import AuthState from '../auth/context/AuthState';

const AppRouter = () => {
	return (
		<HashRouter>
			<AuthState>
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
			</AuthState>
		</HashRouter>
	);
};

export default AppRouter;
