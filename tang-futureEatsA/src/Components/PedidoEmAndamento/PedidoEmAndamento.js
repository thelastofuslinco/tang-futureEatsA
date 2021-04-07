import React from 'react'
import { Div, Conteudo, Img, P } from './styled'
import Relogio from '../../Assets/clock@3x.png'

export default function PedidoEmAndamento(props) {
    return <Div>
        <Conteudo>
            <Img src={Relogio}/>

            <div>
                <div>
                   <P>Pedido em andamento</P>
                </div>
                
                <div>
                    {props.name}
                </div>

                <div>
                    <strong>SUBTOTAL R${props.valor}</strong>   
                </div>
            </div>
        </Conteudo>
    </Div>
}