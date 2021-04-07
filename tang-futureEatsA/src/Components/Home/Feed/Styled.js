import styled from 'styled-components';
import TextField from '@material-ui/core/TextField'

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
	@media (min-width: 541px){
		justify-content: center;
		overflow-x: hidden;
	}
`

export const Span = styled.span`
	margin: 5px 10px;
`

export const SpanAtivado = styled.span`
	color: green;
	margin: 5px 10px;
`
