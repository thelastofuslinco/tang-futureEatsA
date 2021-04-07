import React, { useContext, useEffect } from 'react';
import GlobalStateContext from '../../../Global/GlobalStateContext';
import { Endereco, Div, H3, Img, DivEdit, Body, DivNav } from './Styled'
import CardHistorico from '../../CardHistorico/CardHistorico'
import Edit from '../../../Assets/edit@3x.png'
import { useHistory } from 'react-router-dom';
import Logout from '../../../Assets/1828479.svg'

function Perfil() {
	const data = useContext(GlobalStateContext)
	const history = useHistory()
	return (
		<Body>
			<DivNav>
				<H3> Meu Perfil </H3>
				<Img src={Logout} onClick={() => {localStorage.removeItem("token"); localStorage.removeItem("hasAddress"); history.push("/") }} />
			</DivNav>
			<hr />
			<Div>
				<DivEdit>
					<p>{data.states.perfil.name}</p>
					<Img src={Edit} onClick={() => { history.push("EditarCadastro") }} />
				</DivEdit>
				<p>{data.states.perfil.email}</p>
				<p>{data.states.perfil.cpf}</p>
			</Div>
			<Endereco>
				<DivEdit>
					<p>Endereço cadastrado</p>
					<Img src={Edit} onClick={() => { history.push("MeuEndereco") }} />
				</DivEdit>
				<h5>{data.states.endereco.street}, {data.states.endereco.number} - {data.states.endereco.neighbourhood}</h5>
			</Endereco>
			<Div>
				<p>Histórico de Pedidos</p>
				<hr />
				<p>{data.states.historicoDeCompra.map(array => {
					const date = new Date(array.createdAt)
					const tempo = date.toLocaleDateString("pt-BR")
					return <div key={array.createdAt}>
						<CardHistorico
							name={array.restaurantName}
							tempo={tempo}
							valorTotal={array.totalPrice}
						/>
					</div>
				})}</p>
			</Div>
		</Body>
	)
}

export default Perfil;
