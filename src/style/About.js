import styled from "styled-components";
import colors from "./Colors";

export const ContainerAbout = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
min-height: 80vh;
height: auto;
padding-top: 0px;
`
export const Cards = styled.div`
display: flex;
align-items:center;
justify-content: center;
flex-direction: row;
width: 100%;
gap : 3rem;
`
export const Card = styled.div`
display: grid;
grid-template-columns: repeat(1, 1fr);
background-color: ${colors.primary};
color: white;
height: auto;
min-height: 70vh;
width: auto;
padding: 15px;
border-radius: 10px 10px 10px 10px;
&:hover{
    color: ${colors.primary};
    background-color: white;
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
