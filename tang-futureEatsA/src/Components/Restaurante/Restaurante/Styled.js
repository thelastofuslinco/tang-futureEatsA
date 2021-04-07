import styled from 'styled-components'

export const Header = styled.div`
    display: flex;
`

export const Img = styled.img`
    height: 23px;
    width: 24px;
    margin: 10px 16px;
`

export const P = styled.p`
    font-weight: bold;
    margin: 10px;
`

export const Div = styled.div`
    width: 50%;
    margin: 10px auto;
    border-radius: 8px;
    @media (max-width: 768px){
        width: 90%;
    }
`

export const Logo = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 8px;
`;

export const H3 = styled.h3`
    color: green;
`

export const Hr = styled.div`
    width: 50%;
    
    @media (max-width: 768px){
        width: 90%;
    }
    margin: 20px auto;
`