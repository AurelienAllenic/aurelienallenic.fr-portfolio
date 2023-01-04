import styled from "styled-components";
import colors from "./Colors";

export const HomeContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
min-height: 100vh;
height: auto;
padding-top: 0px;
`
export const ButtonsContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items:center;
gap: 3rem;
padding-top: 20px;
border: none;
`
export const LinkHome = styled.a`
background-color: black;
color: white;
font-size: 25px;
padding: 15px;
border-radius: 15px 15px 15px 15px;

&:hover{
    background-color: white;
    color: black;
    cursor: pointer;
}
`
export const LinkHome2 = styled.p`
background-color: black;
color: white;
font-size: 25px;
padding: 15px;
border-radius: 15px 15px 15px 15px;

&:hover{
    background-color: white;
    color: black;
    cursor: pointer;
}`
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