import axios from 'axios';
import React, { useContext} from 'react';
import GlobalStateContext from '../../Global/GlobalStateContext';
import ProductCard from '../ProductCards/ProductCard';
import { H3, P, Endereco, Div, Nome, Valor, Frete, Input, Button, DivPrincipal, CarrinhoVazio} from './Styled'

export default function Carrinho(props) {
    const data = useContext(GlobalStateContext)

    const confirmaPedido = () => {
        const restaurantId = data.states.carrinhoRestaurantData.id;
        const body = {
            products: data.states.carrinhoDePostagem,
            paymentMethod: "creditcard"
        }

        axios
            .post(`https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants/${restaurantId}/order`, body, {
                headers: {
                    auth: window.localStorage.getItem('token'),
                }
            })
            .then((response) => {
                data.requests.verificaPedido()
                data.setters.setValorTotal("")
                data.setters.setCarrinho([])
                data.setters.setCarrinhoDePostagem([])
                data.setters.setCarrinhoRestaurantData([])
            })
            .catch((error) => console.log(error));
    }
    //REMOVE ITEM DO CARRINHO
    const removeDoCarrinho = (id, price, quantity ) => {
        data.setters.setValorTotal(data.states.valorTotal - (quantity * price))
        const novoCarrinho = data.states.carrinho.filter(array => array.id !== id)
        data.setters.setCarrinho(novoCarrinho)
        data.setters.setCarrinhoDePostagem(novoCarrinho)
        if(data.states.carrinho.length === 1){
            data.setters.setCarrinhoRestaurantData([])
            data.setters.setValorTotal(-data.states.carrinhoRestaurantData.shipping)
        }
    }

    return <DivPrincipal>
        <H3>Meu Carrinho</H3>

        <hr />

        <Endereco> 
            <p>Endereço de entrega</p>
            <P>{data.states.perfil.address}</P>
        </Endereco>

        <Div>
            <Nome>{data.states.carrinhoRestaurantData.name}</Nome>
            <p>{data.states.carrinhoRestaurantData.address}</p>
            {data.states.carrinhoRestaurantData.deliveryTime ? <p>{data.states.carrinhoRestaurantData.deliveryTime} - min</p> : 
            <CarrinhoVazio>carrinho vazio </CarrinhoVazio>}
        </Div>
        
        <div>
            {data.states.carrinho.map(produto => {
                return <div key={produto.id}>
                    <ProductCard
                        funcaoCardB={() => {removeDoCarrinho(produto.id, produto.price, produto.quantity)}}
                        product={produto}
                    />
                </div>
            })}
        </div>

        <Div> 
            {data.states.carrinhoRestaurantData.shipping ? <Frete>Frete R${data.states.carrinhoRestaurantData.shipping}</Frete> : 
            <Frete>Frete R$0,00</Frete>}
            <br/>
            <span>Subtotal</span>
            {data.states.restauranteData.shipping ? <Valor>R${data.states.valorTotal + data.states.restauranteData.shipping}</Valor> :
            <Valor>R$0,00</Valor>}
            <p>Forma de pagamento</p>
        </Div>
        
        <hr />

        <Input
          type="checkbox"
          defaultChecked={false}
        />
        <label>
            Dinheiro
        </label>
        <br />
        <Input
          type="checkbox"
          defaultChecked={false}
        />
        <label>
            Cartão de credito
        </label>
        <br />

        <Button onClick={() => {confirmaPedido()}}>Confirmar</Button>

    </DivPrincipal>
}