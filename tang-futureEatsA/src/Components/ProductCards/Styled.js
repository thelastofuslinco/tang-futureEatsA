import styled from 'styled-components'

export const Div = styled.div`
    border: 1px solid black;
    margin: 10px auto;
    width: 50%;
    @media (max-width: 768px){
        width: 90%;
    }
    border-radius: 8px;
    display: grid;
    grid-template: 1fr/1fr 2fr;
`

export const Img = styled.img`
	width: 100%;
    height: 100%;
    max-height: 95px;
    object-fit: fill;
	border-radius: 8px;
`;

export const Detalhes = styled.div`
    margin-left: 10px;
`
export const P = styled.p`
    font-size: 12px;
`
export const H3 = styled.h3`
    color: green;
    font-size: 16px;
`
export const Price = styled.p`
    font-weight: bold;
`

export const Button = styled.button`
    background: none;
    color: green;
    font-weight: bold;
    border: 1px solid green;
    border-radius: 8px 0px 7px 0px;
    float: right;
`

export const ButtonRemover = styled.button`
    background: none;
    color: red;
    font-weight: bold;
    border: 1px solid red;
    border-radius: 8px 0px 7px 0px;
    float: right;
`

export const Marcador = styled.p`
    border-radius: 0px 8px 0px;
    display: inline-block;
    height: 26px;
    width: 24px;
    color: green;
    border: 1px solid green;
    background-color: #87CEEB;
    text-align: center;
    line-height: 30px;
    float: right;
    margin-right: 15px;
    margin-bottom: 5px;
    box-shadow: inset -10px -10px 10px #87cefa, inset 3px 3px 5px #fff;
    -webkit-transform: translate(-3px,38px);
    -ms-transform: translate(-3px,38px);
    transform: translate(59%,-82%);
`