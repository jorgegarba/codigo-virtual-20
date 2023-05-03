import { useForm } from 'react-hook-form';

const App = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors, isValid }
	} = useForm();

	const onSubmit = (data) => {
		console.log('data', data);
	};
	console.log('errors', errors);

	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<div className="card">
						<div className="card-body">
							<form onSubmit={handleSubmit(onSubmit)}>
								<div className="mb-3">
									<label htmlFor="input-name" className="form-label">
										Nombres:
									</label>
									<input
										type="text"
										id="input-name"
										className={`form-control ${
											errors.firstName ? 'is-invalid' : ''
										}`}
										{...register('firstName', {
											required: {
												message: 'El nombre es obligatorio',
												value: true
											},
											minLength: 3
										})}
									/>
									{errors.firstName && errors.firstName.type === 'required' && (
										<small className="text-danger">
											{errors.firstName.message}
										</small>
									)}
									{errors.firstName &&
										errors.firstName.type === 'minLength' && (
											<small className="text-danger">
												El campo nombre debe de tener una extensión mínima de 3
												caracteres
											</small>
										)}
								</div>
								<div className="mb-3">
									<label htmlFor="input-last-name" className="form-label">
										Apellidos:
									</label>
									<input
										{...register('lastName')}
										type="text"
										id="input-last-name"
										className="form-control"
									/>
								</div>
								<div className="mb-3">
									<label htmlFor="select-documento" className="form-label">
										Documento de identificación:
									</label>
									<select
										name=""
										id="select-documento"
										className="form-control"
										{...register('selectDocumento')}
									>
										<option value="dni">DNI</option>
										<option value="p">Pasaporte</option>
										<option value="ce">Carné de extranjería</option>
									</select>
								</div>
								<button
									type="submit"
									className="btn btn-primary"
									// disabled={!isValid} opcional
								>
									Registrar
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
