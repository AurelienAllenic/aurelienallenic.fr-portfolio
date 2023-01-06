import styled from "styled-components";
import colors from "./Colors";

export const HomeContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: auto;
padding-top: 0px;
animation: apparition 1.5s ease-out forwards;
`
export const InfosContainer = styled.div`
height: auto;
margin: 10%;
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
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
font-weight: 500;
padding-top: 50px;
@media(max-width: 675px){
    font-size: 45px;
    padding-top: 100px;
}
`
export const SecondTitle = styled.p`
font-size: 45px;
color: white;
font-weight: 300;
margin-top: 20px;
@media(max-width: 675px){
    font-size: 35px;
}
`
export const IconsContainer = styled.div`
height: auto;
padding-bottom: 100px;
padding-top: 50px;
animation: apparition 1.5s forwards;
`
export const Icon = styled.a`
font-size: 35px;
margin: 10px;
color: white;
&:hover{
    color: ${colors.primary};
}
@media(max-width: 675px){
    font-size: 30px;
}
@media(max-width: 543px){
    font-size: 25px;
}
`