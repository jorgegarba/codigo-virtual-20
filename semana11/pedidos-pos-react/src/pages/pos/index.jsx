import Boleta from './components/Boleta';
import Carta from './components/Carta';
import Categorias from './components/Categorias';
import Header from './components/Header';
import Mesas from './components/Mesas';
const PosPage = () => {
	return (
		<>
			<Header />
			<main className="pos-container">
				<Categorias />
				<section className="tabla">
					<Mesas />
					<div className="pedido">
						<Carta />
						<Boleta />
					</div>
				</section>
			</main>
		</>
	);
};

export default PosPage;
