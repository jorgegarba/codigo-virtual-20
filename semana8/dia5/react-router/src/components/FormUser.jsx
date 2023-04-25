import { useState } from 'react';
import { TextField, Button } from '@mui/material';

import React from 'react';

const FormUser = () => {
	const [valorDeInputs, setValorInputs] = useState({
		nombre: '',
		apellido: ''
	});

	const manejarChange = (e) => {
		//extraer 2 cosas deñ event
		//1 name de cada input
		//2 value de cada input

		const { name, value } = e.target;

		setValorInputs({
			...valorDeInputs,
			[name]: value
		});
	};

	return (
		<div>
			<form>
				<h4>Formulario de Registro</h4>
				<h5>Nombre :{valorDeInputs.nombre}</h5>
				<h5>Apellido:{valorDeInputs.apellido}</h5>
				<h5>Correo</h5>
				<h5>Password</h5>
				<p>
					<TextField
						onChange={manejarChange}
						type="text"
						variant="outlined"
						label="ingrese su nombre"
						name="nombre"
					/>
				</p>
				<p>
					<TextField
						onChange={manejarChange}
						type="text"
						variant="outlined"
						label="ingrese su apellido"
						name="apellido"
					/>
				</p>
				<p>
					<Button variant="contained" type="submit">
						Registrar
					</Button>
				</p>
			</form>
		</div>
	);
};

export default FormUser;
