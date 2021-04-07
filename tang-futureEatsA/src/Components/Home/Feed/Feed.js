import React, { useContext, useEffect, useState } from 'react';
import { H1,InputContainer, Input, Div, Filtro, Span, SpanAtivado } from './Styled';
import FoodCard from '../../FoodCards/FoodCard';
import GlobalStateContext from '../../../Global/GlobalStateContext';
import { useHistory } from 'react-router-dom';

export default function Feed() {
	//colore o botao do filtro
	const [arabe, setArabe] = useState(false)
	const [asiatica, setAsiatica] = useState(false)
	const [hamburguer, setHamburguer] = useState(false)
	const [italiana, setItaliana] = useState(false)
	const [sorvetes, setSorvetes] = useState(false)
	const [carnes, setCarnes] = useState(false)
	const [baiana, setBaiana] = useState(false)
	const [petiscos, setPetiscos] = useState(false)
	const [mexicana, setMexicana] = useState(false)
	//Variáveis do componente
	const [filtro, setFiltro] = useState("")
	const [ativaFiltro, setAtivaFiltro] = useState(true)
	const history = useHistory();
	const data = useContext(GlobalStateContext);
	const restaurantes = data.states.restaurantes;
	let restauranteFiltrado = restaurantes.filter(array => array.category === filtro)
	//Coleta a ID do restaurante
	const pegaRestauranteId = (id, name) => {
		data.setters.setRestauranteId(id);
		
		history.push(`restaurante/${name}`);
	};

	useEffect(() => {
		data.requests.verificaPedido()
		data.requests.pegaRestaurantes() 
		data.requests.pegaTodoEndereco()
		data.requests.pegaPerfil() 
		data.requests.pegaHistoricoDeCompra()
	}, [])

	return (
		<Div>
			<H1>FutureEats</H1>
			<hr/>	
			<main>
				<InputContainer>
					<Input id="outlined-basic" label="Restaurante" variant="outlined"
						name={"search"}
						placeholder={"Restaurante"}
						type={"text"}
						onClick={() => {history.push("/search")}}
					/>
				</InputContainer>

				<Filtro>
					{ativaFiltro ? <SpanAtivado>Todos</SpanAtivado> : <Span onClick={() => {
						setAtivaFiltro(true) 
						setArabe(false)
						setAsiatica(false)
						setHamburguer(false)
						setItaliana(false)
						setSorvetes(false)
						setCarnes(false)
						setBaiana(false)
						setPetiscos(false)
						setMexicana(false)
					}}> Todos </Span>}
					{arabe ? <SpanAtivado>Árabe</SpanAtivado> : <Span onClick={() => {
						setFiltro("Árabe")
						setAtivaFiltro(false)
						setArabe(true)
						setAsiatica(false)
						setHamburguer(false)
						setItaliana(false)
						setSorvetes(false)
						setCarnes(false)
						setBaiana(false)
						setPetiscos(false)
						setMexicana(false)
					}}> Árabe </Span>}
					{asiatica ? <SpanAtivado>Asiática</SpanAtivado> : <Span onClick={() => {
						setFiltro("Asiática")
						setAtivaFiltro(false)
						setArabe(false)
						setAsiatica(true)
						setHamburguer(false)
						setItaliana(false)
						setSorvetes(false)
						setCarnes(false)
						setBaiana(false)
						setPetiscos(false)
						setMexicana(false)
					}}> Asiática </Span>}
					{hamburguer ? <SpanAtivado>Hamburguer</SpanAtivado> : <Span onClick={() => {
						setFiltro("Hamburguer")
						setAtivaFiltro(false)
						setArabe(false)
						setAsiatica(false)
						setHamburguer(true)
						setItaliana(false)
						setSorvetes(false)
						setCarnes(false)
						setBaiana(false)
						setPetiscos(false)
						setMexicana(false)
					}}> Hamburguer </Span>}
					{italiana ? <SpanAtivado>Italiana</SpanAtivado> : <Span onClick={() => {
						setFiltro("Italiana")
						setAtivaFiltro(false)
						setArabe(false)
						setAsiatica(false)
						setHamburguer(false)
						setItaliana(true)
						setSorvetes(false)
						setCarnes(false)
						setBaiana(false)
						setPetiscos(false)
						setMexicana(false)
					}}> Italiana </Span>}
					{sorvetes ? <SpanAtivado>Sorvetes</SpanAtivado> : <Span onClick={() => {
						setFiltro("Sorvetes")
						setAtivaFiltro(false)
						setArabe(false)
						setAsiatica(false)
						setHamburguer(false)
						setItaliana(false)
						setSorvetes(true)
						setCarnes(false)
						setBaiana(false)
						setPetiscos(false)
						setMexicana(false)
					}}> Sorvetes </Span>}
					{carnes ? <SpanAtivado>Carnes</SpanAtivado> : <Span onClick={() => {
						setFiltro("Carnes")
						setAtivaFiltro(false)
						setArabe(false)
						setAsiatica(false)
						setHamburguer(false)
						setItaliana(false)
						setSorvetes(false)
						setCarnes(true)
						setBaiana(false)
						setPetiscos(false)
						setMexicana(false)
					}}> Carnes </Span>}
					{baiana ? <SpanAtivado>Baiana</SpanAtivado> : <Span onClick={() => {
						setFiltro("Baiana")
						setAtivaFiltro(false)
						setArabe(false)
						setAsiatica(false)
						setHamburguer(false)
						setItaliana(false)
						setSorvetes(false)
						setCarnes(false)
						setBaiana(true)
						setPetiscos(false)
						setMexicana(false)
					}}> Baiana </Span>}
					{petiscos ? <SpanAtivado>Petiscos</SpanAtivado> : <Span onClick={() => {
						setFiltro("Petiscos")
						setAtivaFiltro(false)
						setArabe(false)
						setAsiatica(false)
						setHamburguer(false)
						setItaliana(false)
						setSorvetes(false)
						setCarnes(false)
						setBaiana(false)
						setPetiscos(true)
						setMexicana(false)
					}}> Petiscos </Span>}
					{mexicana ? <SpanAtivado>Mexicana</SpanAtivado> : <Span onClick={() => {
						setFiltro("Mexicana")
						setAtivaFiltro(false)
						setArabe(false)
						setAsiatica(false)
						setHamburguer(false)
						setItaliana(false)
						setSorvetes(false)
						setCarnes(false)
						setBaiana(false)
						setPetiscos(false)
						setMexicana(true)
					}}> Mexicana </Span>}
					
				</Filtro>

				<div>
					{/* //Lista de restaurantes */}
					{ativaFiltro ? restaurantes.map((array) => {
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
					}) : restauranteFiltrado.map((array) => {
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
					})}
				</div>
			</main>
		</Div>
	);
}
