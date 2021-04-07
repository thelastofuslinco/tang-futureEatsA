import React from 'react'
import {Div, H3} from './Styled'
export default function CardHistorico(props) {

    return(
        <Div> 
            <H3>{props.name}</H3>
            <p>{props.tempo}</p>
            <h4>SUBTOTAL R${props.valorTotal}</h4>
        </Div>
    )
}
