import styled from "styled-components";
import colors from "./Colors";

export const PositionCard = styled.div`
padding: 50px;
padding-bottom: 100px;
display: flex;
align-items: center;
justify-content: center;
`
export const Cards = styled.ul`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 5rem;
color: white;
  margin: 0 auto;
  padding: 50px;
@media(max-width: 1125px){
    grid-template-columns: 1fr 1fr;
}
@media(max-width: 758px){
    grid-template-columns: 1fr;
}
`
export const Card = styled.li`
background-color: ${colors.primary};
height: auto;
border-radius: 15px 15px 15px;
width: auto
color: white;
&:hover{
    background-color: transparent;
    border: 1px solid ${colors.primary};
    transform: scale(1.05);
}

`
export const Title = styled.p`
font-size: 30px;
padding: 10px;
@media(max-width: 238px){
    font-size: 25px;
}
`
export const Logo = styled.span`
font-size: 25px;
padding: 10px;
@media(max-width: 238px){
    font-size: 20px;
}
`
export const Content = styled.p`
font-size: 20px;
padding: 10px;
@media(max-width: 238px){
    font-size: 17px;
}
`
