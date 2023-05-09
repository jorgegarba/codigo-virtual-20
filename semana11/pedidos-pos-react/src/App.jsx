import PosPage from './pages/pos';
import PosState from './pages/pos/context/PosState';

const App = () => {
	return (
		<PosState>
			<PosPage />
		</PosState>
	);
};

export default App;
