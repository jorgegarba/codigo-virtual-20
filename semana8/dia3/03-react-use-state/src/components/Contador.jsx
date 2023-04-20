import React, { useState } from 'react';

const Contador = () => {
	const arreglo = useState(500);

	const variable = arreglo[0];
	const modificarVariable = arreglo[1];

	return (
		<div>
			Contador: {variable}
			<button
				onClick={function () {
					modificarVariable(variable + 1);
				}}
			>
				+1
			</button>
		</div>
	);
};

export default Contador;
