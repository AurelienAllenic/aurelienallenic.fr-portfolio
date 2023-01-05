import styled from "styled-components";
import colors from "./Colors";

export const ContainerAbout = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
min-height: 80vh;
height: auto;
padding-top: 0px;
`
export const Cards = styled.div`
display: grid;
width: 100%;
gap : 2rem;
grid-template-columns: 1fr 1fr 1fr;
margin-left: 200px;
margin-right: 150px;
@media(max-width: 1323px){
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-left: 0px;
    margin-right: 0px;
}

`
export const Card = styled.div`
background-color: ${colors.primary};
color: white;
height: auto;
min-height: 70vh;
width: auto;
max-width: 80%;
padding: 15px;
border-radius: 10px 10px 10px 10px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 15px;
&:hover{
    background-color: transparent;
    border: 1px solid ${colors.primary};
    transform: scale(1.05);
}
@media(max-width: 1323px){
    width: 70%;
}
`
export const AboutIcon = styled.span`
font-size: 35px;
`
export const AboutTitle = styled.p`
font-size: 30px;
`
export const AboutSecondTitle = styled.span`
font-size: 25px;
`
export const AboutContent = styled.p`
font-size: 20px;
padding-bottom: 20px;
`
export const AboutSecondTitleLink = styled.a`
font-size: 25px;
color: white;
&:hover{
    color: ${colors.primary};
}
`