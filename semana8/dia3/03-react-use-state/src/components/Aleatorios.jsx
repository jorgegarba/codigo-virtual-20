import React, { useState } from 'react';

const Aleatorios = () => {
	const [numeros, setNumeros] = useState([]);

	const generarAleatorio = () => {
		const nuevoNumero = (Math.random() * (100 - 1) + 1).toFixed(0);
		const copiaNumeros = [...numeros];
		copiaNumeros.push(nuevoNumero);
		setNumeros(copiaNumeros);
	};

	return (
		<div>
			<button onClick={generarAleatorio}>Generar Aleatorio</button>
			{numeros.map((n, i) => {
				return <p key={i}>{n}</p>;
			})}
		</div>
	);
};

export default Aleatorios;
