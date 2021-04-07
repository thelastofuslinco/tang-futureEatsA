import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import GlobalStateContext from '../../../Global/GlobalStateContext';
import ProductCard from '../../ProductCards/ProductCard'
import { Img, P, Header, Div, Logo, H3, Hr } from './Styled'
import Back from '../../../Assets/back@3x.png'
import styled from 'styled-components'

function Restaurante(props) {

	const handleChange = (event) => {
		setQuantidade(event.target.value);
	}
	//caixa de envio
	const [active, setActive] = useState(false)
	const BotaoDeEnvio = styled.button`
		color: green;
		float: right;
		border: none;
		margin: 10px 0;
		background: none;
	`
	const DivTest = styled.div`
		border: 1px solid black;
		width: 200px;
		height: 150px;
		left: 50%;
    	top: 50%;
		margin: -75px 0 0 -75px;
		position: fixed;
		background-color: white;
		display: flex;
  		align-items: center;
		display: ${active ? 'flex' : 'none'};
		flex-direction: column;
    	justify-content: center;
	`
	//Variáveis do restaurante
	const [quantidade, setQuantidade] = useState("")
	const data = useContext(GlobalStateContext);
	const restaurante = data.states.restauranteData;

	const [valorTotal, setValorTotal] = useState({})
	const [carrinhoRestaurantData, setCarrinhoRestaurantData] = useState({})
	const [carrinho, setCarrinho] = useState({})
	const [carrinhoDePostagem, setCarrinhoDePostagem] = useState({})
	//categoria
	const categoria = data.states.produtos.map(produto => { return produto.category })
	//filtro da categoria
	const novaCategoria = categoria.filter(function (este, i) { return categoria.indexOf(este) === i })
	const history = useHistory();
	//Segundo carrinho pra envio
	const segundoCarrinho = () => {
		const bodyA = {
			quantity: quantidade,
			category: carrinho.category,
			description: carrinho.description,
			id: carrinho.id,
			name: carrinho.name,
			photoUrl: carrinho.photoUrl,
			price: carrinho.price,

		}

		const bodyB = {
			quantity: quantidade,
			id: carrinhoDePostagem.id,

		}

		data.setters.setValorTotal(data.states.valorTotal + (quantidade * carrinho.price))
		data.setters.setCarrinhoRestaurantData(restaurante)
		data.setters.setCarrinho([...data.states.carrinho, bodyA])
		data.setters.setCarrinhoDePostagem([...data.states.carrinhoDePostagem, bodyB])
		setQuantidade("")
	}
	//Coloca as compras no carrinho
	const botaCarrinho = (id, price, category, description, name, photoUrl, restaurante) => {

		const bodyA = {
			category: category,
			description: description,
			id: id,
			name: name,
			photoUrl: photoUrl,
			price: price,

		}

		const bodyB = {
			id: id

		}

		setValorTotal(data.states.valorTotal + (quantidade * price))
		setCarrinhoRestaurantData(restaurante)
		setCarrinho( bodyA)
		setCarrinhoDePostagem(bodyB)
	}

	return (
		<div>
			<Header>
				<Img onClick={() => { history.goBack() }} src={Back} />
				<P> Restaurante </P>
			</Header>
			<hr />

			<DivTest>
				<label>Selecione a quantidade</label>
				<input type="number" value={quantidade} onChange={handleChange} autoFocus />
				<BotaoDeEnvio onClick={() => { setActive(!active); segundoCarrinho() }}>Adicionar ao carrinho</BotaoDeEnvio>
			</DivTest>

			<Div>
				<Logo src={restaurante.logoUrl} alt="" />
				<H3>{restaurante.name}</H3>
				<p>{restaurante.category}</p>
				<p>
					<span>{restaurante.deliveryTime} - min |</span>
					<span> Frete: R$ {restaurante.shipping},00</span>
				</p>
				<p>{restaurante.address}</p>
			</Div>

			<div>
				{novaCategoria.map(array => {
					const novoProduto = data.states.produtos.filter(produto => produto.category === array)
					return <div key={array}>
						<Hr>
							<strong>{array}</strong>
							<hr />
						</Hr>
						<p>{novoProduto.map(outroProduto => {
							let verificaBotao = true

							return <div key={outroProduto.id}>

								<ProductCard
									product={outroProduto}
									verificaBotao={verificaBotao}
									carrinho={data.states.carrinho}
									funcaoCard={() => { setActive(!active); botaCarrinho(outroProduto.id, outroProduto.price, outroProduto.category, outroProduto.description, outroProduto.name, outroProduto.photoUrl, restaurante) }}
								/>
							</div>
						})}</p>
					</div>
				})}

			</div>
		</div>
	);
}

export default Restaurante;
