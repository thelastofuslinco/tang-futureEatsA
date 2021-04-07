import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ImgContainer, Img, P, Form, Button, Cadastrar, Btn, Div, SenhaVisual, SenhaVisualImg, DiviGrande } from './styled'
import Logo from '../../../Assets/logo-future-eats-invert@3x.png'
import TextField from '@material-ui/core/TextField'
import SenhaOn from "../../../Assets/senha-2@3x.png"
import SenhaOff from "../../../Assets/senha@3x.png"

export const useForm = (initialValues) => {
	const [form, setForm] = useState(initialValues);

	const onChange = (value, name) => {
		setForm({ ...form, [name]: value });
	};

	return { form, onChange };
};

function Login() {
	const token = window.localStorage.getItem('token');
	const hasAddress = window.localStorage.getItem('hasAddress');
	const { form, onChange } = useForm({ email: '', password: '' });
	const history = useHistory();
	const [senha, setSenha] = useState(true)

	useEffect(() => {
		checaDados(token, hasAddress);
	}, [token, hasAddress])

	const checaDados = (token, hasAddress) => {
		if (token) {
			if (hasAddress !== false) {
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
		Login();
	};

	const Login = () => {
		const body = {
			email: form.email,
			password: form.password,
		};

		axios
			.post(
				'https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/login',
				body
			)
			.then((Response) => {
				window.localStorage.setItem('token', Response.data.token);
				window.localStorage.setItem('hasAddress', Response.data.user.hasAddress);
				history.push("/feed")
			})
			.catch((error) => console.log(error));
	};

	return (
		<div>

			<ImgContainer>
				<Img src={Logo} />
			</ImgContainer>

			<P>Entrar</P>


			<Form onSubmit={handleSubmit}>

				<DiviGrande>
				<Div>
					<TextField id="outlined-basic" label="Email" variant="outlined"
						name={'email'}
						type={'text'}
						placeholder={'email@example.com'}
						value={form.email}
						onChange={handleChange}
						required
					/>
				</Div>


				<Div>
					<TextField id="outlined-basic" label="Senha" variant="outlined"
						name={'password'}
						type={senha ? 'password' : 'text'}
						placeholder={'Minimo 6 caracteres'}
						value={form.password}
						onChange={handleChange}
						required
					/>
					<SenhaVisual onClick={() => {setSenha(!senha)}}>{senha ? <SenhaVisualImg src={SenhaOff}/> : <SenhaVisualImg src={SenhaOn}/>}</SenhaVisual>
				</Div>
				</DiviGrande>
				<Button>Entrar</Button>
			</Form>

			<Cadastrar>
				<span>Não possui Cadastro?</span>{' '}
				<Btn
					onClick={() => {
						history.push('/SignUp');
					}}
				>
					clique aqui
				</Btn>
			</Cadastrar>
		</div>
	);
}

export default Login;
