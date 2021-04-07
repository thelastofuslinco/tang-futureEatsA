import React from 'react';
import {Div, Img, Detalhes, P, H3, Price, Button, Marcador, ButtonRemover} from './Styled'

export default function ProductCard(props) {

	return (
		<Div>
			<div>
				<Img src={props.product.photoUrl} alt="imagem do produto" />
			</div>

			<Detalhes>
				<H3>{props.product.name}</H3>
				{props.product.quantity && <Marcador>{props.product.quantity}</Marcador>}
				<P>{props.product.description}</P>
				<br/>
				<div>
					<Price>R${props.product.price} </Price>
					{props.verificaBotao ? <Button onClick={() => { props.funcaoCard() }}>Adicionar</Button> : 
					<ButtonRemover onClick={() => { props.funcaoCardB() }}>Remover</ButtonRemover>}
				</div>
			</Detalhes>

		</Div>
	);
}
