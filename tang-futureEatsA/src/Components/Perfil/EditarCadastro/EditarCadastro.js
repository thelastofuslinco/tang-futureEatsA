import axios from 'axios';
import React, {  useState } from 'react';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Back from '../../../Assets/back@3x.png';
import {Header, Img, P, Form, Div, Button} from './Styled';

export const useForm = (initialValues) => {
	const [form, setForm] = useState(initialValues);

	const onChange = (value, name) => {
		setForm({ ...form, [name]: value });
	};

	return { form, onChange };
};

function EditarCadastro() {
	const { form, onChange } = useForm({
		name: '',
		email: '',
		cpf: '',
	});

	const handleChange = (event) => {
		const { value, name } = event.target;
		onChange(value, name);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		edicaoDeCadastro();
	};

	const edicaoDeCadastro = () => {
		const body = {
			name: form.name,
			email: form.email,
			cpf: form.cpf,
		};

		axios
			.put(
				'https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/profile',
				body,
				{
					headers: {
						auth: window.localStorage.getItem('token'),
					},
				}
			)
			.then((response) => { history.goBack()})
			.catch((error) => console.log(error));
	};

	const history = useHistory();

	return (
		<div>
			<Header> 
				<Img onClick={() => {history.goBack()}} src={Back}/>
				<P>Editar</P>
			</Header>
			<hr/>
			<Form onSubmit={handleSubmit}>
				<Div>
					<TextField id="outlined-basic" label="Nome" variant="outlined"
						name="name"
						type="text"
						placeholder="Nome Completo"
						value={form.name}
						onChange={handleChange}
					/>
				</Div>
				
				<Div>
					<TextField id="outlined-basic" label="Email" variant="outlined"
						name="email"
						type="email"
						placeholder="email@example.com"
						value={form.email}
						onChange={handleChange}
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
					/>
				</Div>
				<Button type="submit"> Entrar </Button>
			</Form>
		</div>
	);
}

export default EditarCadastro;
