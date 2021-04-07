import { useHistory } from "react-router-dom"
import React, { useEffect } from 'react'
import CartAtivo from '../../Assets/shopping-cart@3x.png'
import CartInativo from '../../Assets/shopping-cart@3xu.png'
import HomeAtivo from '../../Assets/homepage@3xa.png'
import Homeinativo from '../../Assets/homepage@3x.png'
import PerfilAtivo from "../../Assets/avatar@3xa.png"
import PerfilInativo from "../../Assets/avatar@3x.png"
import {Image, Div, Button} from './Styled'

export default function Footer(props) {
    const history = useHistory()
    useEffect(() => {
       selecionaButao()
    }, [])

    const selecionaButao = () => {
        if(history.location.pathname === "/feed"){
            props.setHome(true)
            props.setCarrinho(false)
            props.setPerfil(false) 
        }
        else if(history.location.pathname === "/Carrinho") {
            props.setHome(false)
            props.setCarrinho(true)
            props.setPerfil(false)
        }
        else{
            props.setHome(false)
            props.setCarrinho(false)
            props.setPerfil(true)
        }
    }

    return <Div>
        <Button onClick={() => { 
            history.push("feed")
            selecionaButao()
        }}>{props.home ? <Image src={HomeAtivo}/> : <Image src={Homeinativo}/>}</Button>
        <Button onClick={() => { 
            history.push("Carrinho")
            selecionaButao()
        }}>{props.carrinho ? <Image src={CartAtivo}/> : <Image src={CartInativo}/>}</Button>
        <Button onClick={() => { 
            history.push("Perfil")
            selecionaButao() 
        }}>{props.perfil ? <Image src={PerfilAtivo}/> : <Image src={PerfilInativo}/>}</Button>
    </Div>
}