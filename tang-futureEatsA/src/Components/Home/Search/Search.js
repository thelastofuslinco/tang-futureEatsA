import React, { useContext, useState } from 'react';
import { H1,InputContainer, Input, Div, Header, Img, P } from './Styled';
import FoodCard from '../../FoodCards/FoodCard';
import GlobalStateContext from '../../../Global/GlobalStateContext';
import { useHistory } from 'react-router-dom';
import Back from '../../../Assets/back@3x.png';

export default function Search() {
	//Variáveis do componente
	const [filtro, setFiltro] = useState("")
	const history = useHistory();
	const data = useContext(GlobalStateContext);
	const restaurantes = data.states.restaurantes;
	let restauranteFiltrado = restaurantes.filter(array => {
		const name = array.name.toLowerCase()
		return name.indexOf(filtro.toLowerCase()) > -1
	})
	//Coleta a ID do restaurante
	const pegaRestauranteId = (id, name) => {
		data.setters.setRestauranteId(id);
		history.push(`restaurante/${name}`);
  };
    
	return (
		<Div>
			<Header> 
				<div><Img onClick={() => {history.goBack()}} src={Back}/></div>
				<P>Buscar</P>
			</Header>
			<hr/>	
			<main>
				<InputContainer>
					<Input id="outlined-basic" label="Restaurante" variant="outlined"
						name={"search"}
						placeholder={"Restaurante"}
                        type={"text"}
                        value={filtro}
                        onChange={(event) => {setFiltro(event.target.value)}}
					/>
				</InputContainer>

				<div>
					{/* //Lista de restaurantes */}
					{restauranteFiltrado ? restauranteFiltrado.map((array) => {
						return (
							<div
								key={array.id}
								onClick={() => {
									pegaRestauranteId(array.id, array.name);
								}}
							>
								{/* Card do restaurante */}
								<FoodCard restaurant={array} />
							</div>
						);
					}) : <div>Não encontramos :(</div>}
				</div>
			</main>
		</Div>
	);
}
