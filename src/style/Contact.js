import styled from "styled-components";
import colors from "./Colors";

export const ContactContainer = styled.div`
with: 100%;
height: auto;
display: flex;
align-items: center;
justify-content: center;
padding: 50px;
`
export const CardsContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 10rem;
@media(max-width: 1111px){
    grid-template-columns: 1fr;
}
`
export const FormContainer = styled.form`
display: flex;
flex-direction: column;
@media(max-width: 387px){
    padding-left: 20px;
    padding-right: 20px;
}
`
export const Cards = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 1rem;
@media(max-width: 801px){
    grid-template-columns: 1fr;
}
@media(max-width: 387px){
    padding-left: 20px;
    padding-right: 20px;
}
`
export const Card = styled.div`
background-color: ${colors.primary};
color: white;
padding: 15px;
border-radius: 15px 15px 15px 15px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
&:hover{
    color: ${colors.primary};
    background-color: transparent;
    border: 1px solid ${colors.primary};
    transform: scale(1.05);
}
`
export const Title = styled.p`
font-size: 30px;
padding-bottom: 50px;
@media(max-width: 405px){
    font-size: 25px;
    padding-bottom: 10px;
}
`
export const Icon = styled.p`
font-size: 35px;
@media(max-width: 405px){
    font-size: 35px;
}
`
export const LinkContact = styled.a`
font-size: 25px;
color: white;
border: 1px solid white;
border-radius: 15px 15px 15px 15px;
padding: 10px;
&:hover{
    color: ${colors.primary};
    background-color: white;
}
@media(max-width: 405px){
    font-size: 20px;
}
`
export const InputStyle = styled.input`
padding: 20px;
border: none;
background-color: ${colors.primary};
margin: 10px;
border-radius: 15px 15px 15px 15px;
font-size: 25px;
&:focus{
    outline: none;
    background-color: white;
}
&:hover{
    font-weight: 700;
    cursor: pointer;
}
&::placeholder{
    text-align: center;
    color: white;
    font-size: 25px;
    padding: 10px;
}
`
export const Message = styled.textarea`
background-color: ${colors.primary};
margin: 10px;
border-radius: 15px 15px 15px 15px;
resize: none;
font-size: 25px;
padding: 15px;
&:focus{
    outline: none;
    background-color: white;
}
&:hover{
    font-weight: 700;
    cursor: pointer;
}
&::placeholder{
    text-align: center;
    color: white;
    font-size: 25px;
    padding: 10px;
}
`
export const Validation = styled.button`
background-color: ${colors.primary};
margin: 10px;
font-size: 25px;
border-radius: 15px 15px 15px 15px;
padding: 15px;
color: white;
&:hover{
    color: ${colors.primary};
    background-color: white;
    cursor: pointer;
}
`
export const GoTopContainer = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`
export const GoToTop = styled.a`
color: white;
font-size: 55px;
background-color: ${colors.primary};
border-radius: 15px 15px 0px 0px;
height: auto;
&:hover{
    
    background-color: white;
    color: ${colors.primary};
    cursor: pointer;
}
`
export const SpanIcon = styled.span`
padding: 15px;
`