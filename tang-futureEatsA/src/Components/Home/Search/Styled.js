import styled from 'styled-components';
import TextField from '@material-ui/core/TextField'

export const Img = styled.img`
    height: 23px;
    width: 24px;
    margin: 10px 16px;
`
export const P = styled.p`
    font-weight: bold;
    margin: 10px;
`

export const Header = styled.div`
display: grid;
grid-template: 1fr / 1fr 1.5fr;
`

export const H1 = styled.p`
	padding: 10px 0;
	font-size: 1.5em;
	text-align: center;
`;

export const InputContainer = styled.div`
	display: flex;
	justify-content: center;
	margin: 10px;
`;

export const Input = styled(TextField)`
	width: 70%;
	@media (max-width: 425px){
		width: 90%;
	}

`
export const Div = styled.div`
	margin-bottom: 50px;
`

export const Filtro = styled.div`
	display: flex;
	overflow-x: scroll;
`

export const Span = styled.span`
	margin: 5px 10px;
`

export const SpanAtivado = styled.span`
	color: green;
	margin: 5px 10px;
`
