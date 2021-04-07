import React, { useEffect, useState } from "react";
import GlobalStateContext from "./GlobalStateContext"
import axios from "axios";

const GlobalState = (props) => {
    //carrinho inicia
    const [carrinho, setCarrinho] = useState([])
    const [carrinhoRestaurantData, setCarrinhoRestaurantData] = useState({})
    const [carrinhoDePostagem, setCarrinhoDePostagem] = useState([])
    const [valorTotal, setValorTotal] = useState(0)
    //carrinho termina
    //Verificar o pedido Termina
    const [pedidoConfirmado, setPedidoConfirmado] = useState({})

    const verificaPedido = () => {
        axios
            .get("https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/active-order", {
                headers: {
                    "auth": window.localStorage.getItem("token")
                }
            })
            .then(response => setPedidoConfirmado(response.data.order))
            .catch(erro => console.log(erro))
    }

    useEffect(() => {
        verificaPedido()
    }, [])
    //Verificar o pedido Termina
    //Coleta os restaurantes da api inicia
    const [restaurantes, setRestaurantes] = useState([])

    const pegaRestaurantes = () => {
        axios
            .get("https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants", {
                headers: {
                    "auth": window.localStorage.getItem("token")
                }
            })
            .then(response => setRestaurantes(response.data.restaurants))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        pegaRestaurantes()
    }, [])
    //Coleta os restaurantes da api termina
    //Coleta todos os dados do restaurante inicia
    const [restauranteId, setRestauranteId] = useState("")
    const [restauranteData, setRestauranteData] = useState({})
    const [produtos, setProdutos] = useState([])

    const pegaRestauranteId = () => {

        axios
            .get(`https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants/${restauranteId}`, {
                headers: {
                    "auth": window.localStorage.getItem("token")
                }
            })
            .then(response => {
                setRestauranteData(response.data.restaurant)
                setProdutos(response.data.restaurant.products)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        if (restauranteId) {
            pegaRestauranteId()
        }
    }, [restauranteId])
    //Coleta todos os dados do restaurante termina
    //Perfil do usuario inicia
    const [endereco, setEndereco] = useState({})
    const [perfil, setPerfil] = useState({})
    const [historicoDeCompra, setHistoricoDeCompra] = useState({})
    //coleta Endereço do usuario
    const pegaTodoEndereco = () => {
        axios
            .get(
                'https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/profile/address',
                {
                    headers: {
                        auth: window.localStorage.getItem('token'),
                    },
                }
            )
            .then((response) => setEndereco(response.data.address))
            .catch((error) => console.log(error));
    };
    //coleta dados do usuario
    const pegaPerfil = () => {
        axios
            .get(
                'https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/profile',
                {
                    headers: {
                        auth: window.localStorage.getItem('token'),
                    },
                }
            )
            .then((response) => setPerfil(response.data.user))
            .catch((error) => console.log(error));
    };
    //coleta o historico de compra do usuario
    const pegaHistoricoDeCompra = () => {
        axios
            .get(
                'https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/orders/history',
                {
                    headers: {
                        auth: window.localStorage.getItem('token'),
                    },
                }
            )
            .then((response) => setHistoricoDeCompra(response.data.orders))
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        pegaTodoEndereco();
        pegaPerfil();
        pegaHistoricoDeCompra();
    }, [])
    //Perfil do usuario termina

    const states = { restaurantes, restauranteId, restauranteData, produtos, carrinho, pedidoConfirmado, carrinhoRestaurantData, carrinhoDePostagem, perfil, historicoDeCompra, endereco, valorTotal }
    const setters = { setRestaurantes, setRestauranteId, setCarrinho, setCarrinhoRestaurantData, setCarrinhoDePostagem, setPerfil, setHistoricoDeCompra, setEndereco, setValorTotal }
    const requests = {verificaPedido, pegaRestaurantes, pegaTodoEndereco, pegaPerfil, pegaHistoricoDeCompra, pegaRestauranteId}

    const data = { states, setters, requests }

    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider >
    )
}
export default GlobalState