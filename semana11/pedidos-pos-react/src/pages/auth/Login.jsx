import { useContext, useState } from 'react';
import { postLogin } from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthState';

const Login = () => {
	const { guardarToken } = useContext(AuthContext);
	const navigate = useNavigate();
	const [form, setForm] = useState({
		email: 'john@mail.com',
		password: 'changeme'
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		postLogin(form).then((data) => {
			if (data.access_token) {
				guardarToken(data.access_token);
			}
		});
	};

	return (
		<main className="login">
			<div className="login__form">
				<h1>Inicio de Sesión</h1>
				<form className="formulario" onSubmit={handleSubmit}>
					<label htmlFor="">Email:</label>
					<input
						name="email"
						onChange={(e) => setForm({ ...form, email: e.target.value })}
						value={form.email}
						type="email"
						className="formulario__input"
						placeholder="Email"
					/>
					<label htmlFor="">Password:</label>
					<input
						name="password"
						onChange={(e) => setForm({ ...form, password: e.target.value })}
						value={form.password}
						type="password"
						className="formulario__input"
						placeholder="Password"
					/>
					<button className="formulario__submit" type="submit">
						Iniciar Sesión
					</button>
				</form>
			</div>
		</main>
	);
};

export default Login;
