import React, { useContext, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Feed from '../Components/Home/Feed/Feed';
import Login from '../Components/LoginSignUp/Login/Login';
import SignUp from '../Components/LoginSignUp/SignUp/SignUp';
import CadastroEndereco from '../Components/LoginSignUp/CadastroEndereco/CadastroEndereco';
import Perfil from '../Components/Perfil/Perfil/Perfil';
import EditarCadastro from '../Components/Perfil/EditarCadastro/EditarCadastro';
import Restaurante from '../Components/Restaurante/Restaurante/Restaurante';
import Carrinho from '../Components/Carrinho/Carrinho';
import Footer from '../Components/Footer/Footer'
import PedidoEmAndamento from '../Components/PedidoEmAndamento/PedidoEmAndamento'
import GlobalStateContext from '../Global/GlobalStateContext';
import Search from "../Components/Home/Search/Search"
import TelaDeLoading from '../Components/TelaDeLoading/TelaDeLoading'

function Router() {
	//constantes do footer
	const [home, setHome] = useState(true)
	const [carrinho, setCarrinho] = useState(false)
	const [perfil, setPerfil] = useState(false)
	//dados do GlobalState
	const data = useContext(GlobalStateContext)
	//Tela de loading
	const [telaDeLoading, setTelaDeLoading] = useState(false)

	function loading() {
		return new Promise(resolve => {
		  setTimeout(() => {
			setTelaDeLoading(true)
		  }, 3000);
		});
	}

	loading()
	
	return (
		<div>
			{telaDeLoading ? <BrowserRouter>

				<Switch>
					<Route exact path="/">
						<Login />
					</Route>

					<Route exact path="/SignUp">
						<SignUp />
					</Route>

					<Route exact path="/MeuEndereco">
						<CadastroEndereco />
					</Route>

					<Route exact path="/Feed">
						<Feed />
						{data.states.pedidoConfirmado ? <PedidoEmAndamento 
						name={data.states.pedidoConfirmado.restaurantName}
						valor={data.states.pedidoConfirmado.totalPrice}
						/> : <div></div>}
						<Footer
							home={home}
							setHome={setHome}
							perfil={perfil}
							setPerfil={setPerfil}
							carrinho={carrinho}
							setCarrinho={setCarrinho}
						/>
					</Route>

					<Route exact path="/Search">
						<Search/>
					</Route>

					<Route exact path="/Carrinho">
						<Carrinho />
						<Footer
							home={home}
							setHome={setHome}
							perfil={perfil}
							setPerfil={setPerfil}
							carrinho={carrinho}
							setCarrinho={setCarrinho}
						/>
					</Route>

					<Route exact path="/Restaurante/:Restaurante">
						<Restaurante />
					</Route>

					<Route exact path="/Perfil">
						<Perfil />
						<Footer
							home={home}
							setHome={setHome}
							perfil={perfil}
							setPerfil={setPerfil}
							carrinho={carrinho}
							setCarrinho={setCarrinho}
						/>
					</Route>

					<Route exact path="/EditarCadastro">
						<EditarCadastro />
					</Route>
				</Switch>
			</BrowserRouter> : 
			<TelaDeLoading/>}
		</div>
	);
}

export default Router;
