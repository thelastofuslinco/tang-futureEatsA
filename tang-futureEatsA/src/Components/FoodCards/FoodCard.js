import React from 'react';
import { MainDiv, DivImg, DivDetalhes, Img, P , Title } from './Styled';

export default function FoodCard(props) {
	return (
		<MainDiv>
			<DivImg>
				<Img src={props.restaurant.logoUrl} />
			</DivImg>
			<Title>
				<h3>{props.restaurant.name}</h3>
			</Title>
			<DivDetalhes>
				<P>{props.restaurant.deliveryTime} - min </P>
				<P>Frete R${props.restaurant.shipping},00</P>
			</DivDetalhes>
		</MainDiv>
	);
}
