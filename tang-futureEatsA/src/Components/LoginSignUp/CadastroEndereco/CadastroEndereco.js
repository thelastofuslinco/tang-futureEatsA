import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Img, P, Form, Button, Div } from './Styled'
import TextField from '@material-ui/core/TextField'
import Back from '../../../Assets/back@3x.png'

export const useForm = (initialValues) => {
	const [form, setForm] = useState(initialValues);

	const onChange = (value, name) => {
		setForm({ ...form, [name]: value });
	};

	return { form, onChange };
};

function CadastroEndereco() {
	const { form, onChange } = useForm({
		street: '',
		number: '',
		neighbourhood: '',
		city: '',
		state: '',
		complement: '',
	});

	const history = useHistory();

	const handleChange = (event) => {
		const { value, name } = event.target;
		onChange(value, name);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		CadastrarEndereco();
	};

	const CadastrarEndereco = () => {
		const body = {
			street: form.street,
			number: form.number,
			neighbourhood: form.neighbourhood,
			city: form.city,
			state: form.state,
			complement: form.complement,
		};

		axios
			.put(
				'https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/address',
				body,
				{
					headers: {
						auth: window.localStorage.getItem('token'),
					},
				}
			)
			.then((Response) => {
				window.localStorage.setItem('hasAddress', Response.data.user.hasAddress)
				window.localStorage.setItem('token', Response.data.token)
				history.push("/feed")
			})
			.catch((error) => console.log(error));
	};

	return (
		<div>
			<Img onClick={() => {history.goBack()}} src={Back}/>
			<hr/>
			<P>Meu endereço</P>
			<Form onSubmit={handleSubmit}>
				<Div>
					<TextField id="outlined-basic" label="Rua" variant="outlined"
						name={'street'}
						type={'text'}
						value={form.street}
						onChange={handleChange}
						placeholder={'Rua'}
						required
					/>
				</Div>
				<Div>
					<TextField	id="outlined-basic" label="número" variant="outlined"
						name={'number'}
						type={'number'}
						value={form.number}
						onChange={handleChange}
						placeholder={'Numero'}
						required
					/>
				</Div>
				<Div> 
					<TextField id="outlined-basic" label="Vizinhaça" variant="outlined"
						name={'neighbourhood'}
						type={'text'}
						value={form.neighbourhood}
						onChange={handleChange}
						placeholder={'Vizinhança'}
						required
					/>
				</Div>
				<Div>
					<TextField id="outlined-basic" label="Cidade" variant="outlined"
						name={'city'}
						type={'text'}
						value={form.city}
						onChange={handleChange}
						placeholder={'Cidade'}
						required
					/>
				</Div>
				<Div>
					<TextField id="outlined-basic" label="Estado" variant="outlined"
						name={'state'}
						type={'text'}
						value={form.state}
						onChange={handleChange}
						placeholder={'Estado'}
						required
					/>
				</Div>
				<Div>
					<TextField id="outlined-basic" label="Complemento" variant="outlined"
						name={'complement'}
						type={'text'}
						value={form.complement}
						onChange={handleChange}
						placeholder={'Complemento'}
					/>
				</Div>
				<Button>Salvar</Button>
			</Form>
		</div>
	);
}
export default CadastroEndereco;
