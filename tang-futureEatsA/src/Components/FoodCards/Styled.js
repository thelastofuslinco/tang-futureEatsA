import styled from 'styled-components';

export const MainDiv = styled.div`
	border: 1px solid black;
	margin: 10px auto;
	width: 40%;
	border-radius: 8px;
	@media (max-width: 1100px){
		width: 70%;
	}

	@media (max-width: 540px){
		width: 90%;
	}
`;

export const DivImg = styled.div`
	width: 100%;
`;

export const Img = styled.img`
	width: 100%;
	height: 100%;
	max-height: 300px;
	@media (max-width: 425px){
		max-height: 250px;
	}
	object-fit: fill;
	border-radius: 8px;
`;

export const Title = styled.div`
	margin-left: 10px;
`

export const DivDetalhes = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const P = styled.p`
	margin: 10px;
`;
