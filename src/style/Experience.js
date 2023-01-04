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
`
export const Card = styled.div`
background-color: ${colors.primary};
border-radius: 10px 10px 10px 10px;
&:hover{
    background-color: transparent;
    color: ${colors.primary};
    font-weight: 800;
    border: 1px solid ${colors.primary};
}
`
export const MainTitleCard = styled.p`
font-size: 30px;
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
`
export const Level = styled.p`
font-style: italic;
font-size: 20px;
`