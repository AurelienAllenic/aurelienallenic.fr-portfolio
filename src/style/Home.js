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
font-size: 25px;
@media(max-width: 675px){
    gap: 2rem;
    font-size: 20px;
}
@media(max-width: 543px){
    gap: 1rem;
    font-size: 17px;
}
`
export const LinkHome = styled.a`
background-color: black;
color: white;
padding: 15px;
border-radius: 15px 15px 15px 15px;
&:hover{
    background-color: white;
    color: black;
    cursor: pointer;
}
`
export const MainTitle = styled.p`
font-size: 55px;
color: white;
display: flex;
justify-content: center;
align-items: center;
font-weight: 500;
margin-top: 50px;
@media(max-width: 675px){
    font-size: 45px;
}
`
export const SecondTitle = styled.p`
font-size: 45px;
color: white;
display: flex;
justify-content: center;
align-items: center;
font-weight: 300;
margin-top: 20px;
@media(max-width: 675px){
    font-size: 35px;
}
`

export const IconsContainer = styled.div`
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
width: auto;
&:hover{
    color: ${colors.primary};
}
@media(max-width: 675px){
    font-size: 30px;
}
@media(max-width: 543px){
    font-size: 25px;
}
@media(max-width: 453px){
    width: 200%;
}
`