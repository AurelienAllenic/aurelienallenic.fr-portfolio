import styled from "styled-components";
import colors from "./Colors";

export const PositionCard = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding-left: 50px;
padding-right: 50px;
`
export const Cards = styled.div`
display: grid;
gap: 30px;
grid-template-columns: 1fr 1fr 1fr;
padding: 40px;
height: auto;
width: 100%;
gap: 100px;
color: white;
`
export const Card = styled.div`
background-color: ${colors.primary};
height: auto;
padding: 25px;
border-radius: 15px 15px 15px;
width: 100%;
&:hover{
    color: ${colors.primary};
    background-color: transparent;
    border: 1px solid ${colors.primary};
    transform: scale(1.05);
}
`
export const Title = styled.p`
font-size: 30px;
`
export const Logo = styled.span`
font-size: 25px;
`
export const Content = styled.p`
font-size: 20px;
`
