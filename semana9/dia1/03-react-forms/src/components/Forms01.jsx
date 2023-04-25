// Formularios controlados
/**
 * Los formularios controlados son aquellos formularios que
 * en los inputs tienen asignados los atributos value y onchange.
 * Y además, están controlados por una o más variables de estado
 */

import { useState } from 'react';

const Forms01 = () => {
	const [formulario, setFormulario] = useState({
		edad: 0,
		nacionalidad: 'pe',
		genero: 'f',
		html: false,
		js: false,
		css: false
	});

	const handleChange = (e) => {
		setFormulario({
			...formulario,
			// [e.target.name]: e.target.value
			[e.target.name]:
				e.target.type === 'checkbox' ? e.target.checked : e.target.value
		});
	};

	// const handleLenguajes = (e) => {
	// 	setFormulario({
	// 		...formulario,
	// 		[e.target.name]: e.target.checked
	// 	});
	// };

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('mandando formulario');
		console.log(formulario);
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-6">
					<form onSubmit={handleSubmit}>
						<div className="mb-3">
							<label htmlFor="input-edad" className="form-label">
								Edad:
							</label>
							<input
								type="number"
								id="input-edad"
								className="form-control"
								onChange={handleChange}
								value={formulario.edad}
								name="edad"
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="select-nacionalidad" className="form-label">
								Nacionalidad
							</label>
							<select
								id="select-nacionalidad"
								className="form-control"
								onChange={handleChange}
								value={formulario.nacionalidad}
								name="nacionalidad"
							>
								<option value="pe">Peruano</option>
								<option value="ec">Ecuatoriano</option>
								<option value="bo">Boliviano</option>
								<option value="ch">Chileno</option>
							</select>
						</div>
						<div className="mb-3">
							<div className="form-check">
								<input
									className="form-check-input"
									type="radio"
									name="genero"
									id="genero-masculino"
									value="m"
									onChange={handleChange}
									checked={formulario.genero === 'm'}
								/>
								<label className="form-check-label" htmlFor="genero-masculino">
									Masculino
								</label>
							</div>
							<div className="form-check">
								<input
									checked={formulario.genero === 'f'}
									className="form-check-input"
									type="radio"
									name="genero"
									id="genero-femenino"
									value="f"
									onChange={handleChange}
								/>
								<label className="form-check-label" htmlFor="genero-femenino">
									Femenino
								</label>
							</div>
						</div>
						<div className="mb-3">
							<div className="form-check">
								<input
									className="form-check-input"
									type="checkbox"
									id="check-html"
									name="html"
									onChange={handleChange}
									// checked={formulario.html}
								/>
								<label className="form-check-label" htmlFor="check-html">
									HTML
								</label>
							</div>
							<div className="form-check">
								<input
									className="form-check-input"
									type="checkbox"
									id="check-js"
									name="js"
									onChange={handleChange}
									// checked={formulario.js}
								/>
								<label className="form-check-label" htmlFor="check-js">
									JS
								</label>
							</div>
							<div className="form-check">
								<input
									className="form-check-input"
									type="checkbox"
									id="check-css"
									name="css"
									onChange={handleChange}
									// checked={formulario.css}
								/>
								<label className="form-check-label" htmlFor="check-css">
									CSS
								</label>
							</div>
						</div>
						<button type="submit">Crear registro</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Forms01;
