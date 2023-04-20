import React from 'react';
import Contador from './components/Contador';
import Aleatorios from './components/Aleatorios';
import Frase from './components/Frase';

const App = () => {
	return (
		<div>
			<Contador />
			<hr />
			<Aleatorios />
			<hr />
			<Frase />
		</div>
	);
};

export default App;
