import styled from "styled-components";
import colors from "./Colors"

export const MainTitle = styled.p`
font-size: 55px;
color: white;
display: flex;
justify-content: center;
align-items: center;
font-weight: 500;
margin-top: 50px;
`
export const SecondTitle = styled.p`
font-size: 45px;
color: white;
display: flex;
justify-content: center;
align-items: center;
font-weight: 300;
margin-top: 20px;
`

export const IconsContainer = styled.div`
display: flex;
height: auto;
`
export const IconsPosition = styled.div`
position: absolute;
bottom: 2%;
`
export const Icon = styled.a`
font-size: 35px;
margin: 10px;
color: white;
&:hover{
    color: ${colors.primary};
}
`