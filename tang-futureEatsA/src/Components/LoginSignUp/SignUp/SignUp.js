import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ImgContainer, Img, P, Button, Div, Form } from './Styled'
import Logo from '../../../Assets/logo-future-eats-invert@3x.png'
import TextField from '@material-ui/core/TextField'

export const useForm = (initialValues) => {
	const [form, setForm] = useState(initialValues);

	const onChange = (value, name) => {
		setForm({ ...form, [name]: value });
	};

	return { form, onChange };
};

function SignUp() {
	const token = window.localStorage.getItem('token');
	const hasAddress = window.localStorage.getItem('hasAddress');
	const history = useHistory();
	const { form, onChange } = useForm({
		name: '',
		email: '',
		cpf: '',
		password: '',
		passwordConfirm: '',
	});

	useEffect(() => {
		checaDados();
	}, []);

	const checaDados = () => {
		if (token) {
			if (hasAddress) {
				history.push('/Feed');
			} else {
				history.push('/MeuEndereco');
			}
		}
	};

	const handleChange = (event) => {
		const { value, name } = event.target;
		onChange(value, name);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		signUpFutureEats();
	};

	const signUpFutureEats = () => {
		const body = {
			name: form.name,
			email: form.email,
			cpf: form.cpf,
			password: form.password,
		};

		axios
			.post(
				'https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/signup',
				body
			)
			.then((Response) => {
				window.localStorage.setItem('token', Response.data.token);
				window.localStorage.setItem('hasAddress', Response.data.user.hasAddress);
				history.push("/meuEndereco")
			})
			.catch((error) => alert(error));
	};

	return (
		<div>
			<ImgContainer>
				<Img src={Logo} />
			</ImgContainer>

			<P>Cadastrar</P>

			<Form onSubmit={handleSubmit}>
				<Div>
					<TextField id="outlined-basic" label="Nome" variant="outlined"
						name="name"
						type="text"
						placeholder="Nome Completo"
						value={form.name}
						onChange={handleChange}
						required
					/>
				</Div>
				<Div>
					<TextField id="outlined-basic" label="Email" variant="outlined"
						name="email"
						type="email"
						placeholder="email@example.com"
						value={form.email}
						onChange={handleChange}
						required
					/>
				</Div>
				<Div>
					<TextField id="outlined-basic" label="Cpf" variant="outlined"
						name="cpf"
						type="text"
						pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
						placeholder="000.000.000-00"
						value={form.cpf}
						onChange={handleChange}
						required
					/>
				</Div>
				<Div>
					<TextField id="outlined-basic" label="Senha" variant="outlined"
						name="password"
						type="password"
						placeholder="Mínimo 6 caracteres"
						value={form.password}
						onChange={handleChange}
						required
					/>
				</Div>
				<Div>
					<TextField id="outlined-basic" label="Confirme a senha" variant="outlined"
						name="passwordConfirm"
						type="password"
						placeholder="Mínimo 6 caracteres"
						value={form.passwordConfirm}
						onChange={handleChange}
						required
					/>
				</Div>
				<Button type="submit"> Enviar </Button>
			</Form>
		</div>
	);
}

export default SignUp;
