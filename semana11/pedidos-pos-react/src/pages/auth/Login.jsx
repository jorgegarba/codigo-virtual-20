import { useState } from 'react';
import { postLogin } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate();
	const [form, setForm] = useState({
		username: 'mor_2314',
		password: '83r5^_'
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		postLogin(form).then((data) => {
			if (data.token) {
				navigate('/admin/pos');
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
						name="username"
						onChange={(e) => setForm({ ...form, username: e.target.value })}
						value={form.username}
						type="text"
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
