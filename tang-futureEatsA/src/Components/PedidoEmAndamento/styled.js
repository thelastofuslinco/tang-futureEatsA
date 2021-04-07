import styled from 'styled-components'

export const Div = styled.div`
    background-color: green;
    position: fixed;
    height: 128px;
    bottom: -4px;
    margin: 37px 0;
    width: 100%;
    display: grid;
`

export const Conteudo = styled.div`
    margin: 24px;
    display: grid;
    grid-template: 1fr / 1fr 4fr;
    align-items: center;
`
export const Img = styled.img`
    height: 32px;
    width: 32px;
`
export const P = styled.p`
    color: white;
`