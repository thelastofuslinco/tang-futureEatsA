import styled from 'styled-components'

export const H3 = styled.h3`
    text-align: center;
    padding: 10px;
`

export const Endereco = styled.div`
    background-color: #eeeeee;
    padding: 10px;
`
export const P = styled.p`
    font-weight: bold;
`

export const Div = styled.div`
    margin: 10px;
`

export const Nome = styled.h3`
    color: green;
`

export const Valor = styled.strong`
    float: right;
    color: green;
`
export const Frete = styled.p`
    float: right;
`
export const Input = styled.input`
    margin: 10px;
`

export const Button = styled.button`
    display: flex;
    background-color: green;
    width: 50%;
    margin: 10px auto;
    border-radius: 8px;
    @media (max-width: 540px){
        width: 90%;
    }
    height: 42px;
    border: none;
    justify-content: center;
    align-items: center;
    margin: 10px auto;
    font-weight: bold;
    border-radius: 4px;
`

export const DivPrincipal = styled.div`
    padding-bottom: 50px;   
`

export const CarrinhoVazio = styled.div`
    text-align: center;
`