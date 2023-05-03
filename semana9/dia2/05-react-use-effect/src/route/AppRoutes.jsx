import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/pages/Home';
import ProductSection from '../components/pages/productSection';
import Header from '../components/header';

const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route index element={<Home />} />
				<Route path="product/:idproducto" element={<ProductSection />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
