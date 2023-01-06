import styled from "styled-components";
import colors from "./Colors";

export const PortfolioContainer = styled.div`
padding-bottom: 100px;
padding: 50px;
display: flex;
align-items: center;
justify-content: center;
@media(max-width: 463px){
    padding: 20px;
}
`
export const CardsContainer = styled.ul`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 3rem;
@media(max-width: 1481px){
    grid-template-columns: repeat(2, 1fr);
}
@media(max-width: 745px){
    grid-template-columns: repeat(1, 1fr);
}
@media(max-width: 745px){

}
`
export const Card = styled.li`
background-color: ${colors.primary};
border-radius: 10px 10px 10px 10px;
width: auto;
color: white;
&:hover{
    transform: scale(1.05);
    background-color: transparent;
    border: 1px solid ${colors.primary};
    font-weight: 500;
}
@media(max-width: 381px){
    padding-left: 5px;
padding-right : 5px;
}
`
export const ImageCard = styled.img`
padding-top: 15px;
width: 95%;
border-radius: 25px 25px 15px 15px;
height: auto;
@keyframes sepia{
    0% {
        filter: sepia(5%);
    }
    100% {
        filter: sepia(30%);
    }
}
&:hover{
    animation: sepia 2s ease forwards;
}
`
export const ContentCard = styled.p`
font-size: 25px;
padding-left: 30px;
padding-right : 30px;
@media(max-width: 450px){
    padding-left: 10px;
    padding-right : 10px;
    font-size: 20px;
}
@media(max-width: 381px){
    padding-left: 20px;
padding-right : 20px;
}
`

export const Buttons = styled.div`
gap: 3rem;
padding-top: 25px;
padding-bottom: 35px;
@media(max-width: 396px){
    gap: 0rem;
}
`
export const Link = styled.a`
font-size: 20px;
color: white;
margin: 20px;
border: 1px solid white;
padding: 15px;
border-radius: 15px;
&:hover{
    color: ${colors.primary};
    background-color: white;
}
@media(max-width: 450px){
    font-size: 17px;
}
@media(max-width: 396px){
    margin: 5px;
}
@media(max-width: 314px){
    font-size: 15px;
    padding: 10px;
}
`