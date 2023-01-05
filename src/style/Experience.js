import styled from "styled-components";
import colors from "./Colors";

export const ExperienceContainer = styled.div`
height: auto;
padding-top: 200px;
padding-bottom: 200px;
color: white;
`
export const Cards = styled.div`
display: grid;
grid-template-columns: repeat(2, 3fr);
gap: 2rem;
padding-left: 50px;
padding-right: 50px;
@media(max-width: 973px){
    grid-template-columns: repeat(1, 3fr);
}
@media(max-width: 350px){
    padding-left: 20px;
    padding-right: 20px;
}
`
export const Card = styled.div`
background-color: ${colors.primary};
border-radius: 10px 10px 10px 10px;
&:hover{
    background-color: transparent;
    font-weight: 800;
    border: 1px solid ${colors.primary};
    transform: scale(1.05);
}
`
export const MainTitleCard = styled.p`
font-size: 30px;
@media(max-width: 973px){
    font-size: 25px;
}
`
export const CodeAndLevel = styled.div`
display: flex;
gap: 5rem;
width: 100%;
justify-content: center;
align-items: center;
`
export const Code = styled.p`
width: 100px;
font-size: 20px;
@media(max-width: 973px){
    font-size: 18px;
}
@media(max-width: 420px){
    width: 50px;
}
@media(max-width: 350px){
    width: 20px;
}
@media(max-width: 244px){
    width: 10px;
}
`
export const Level = styled.p`
font-style: italic;
font-size: 20px;
@media(max-width: 973px){
    font-size: 18px;
}
`