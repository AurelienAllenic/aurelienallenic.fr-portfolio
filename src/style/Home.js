import styled from "styled-components";

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
`
export const ButtonHome = styled.a`
background-color: black;
color: white;
font-size: 25px;
padding: 15px;
border-radius: 15px 15px 15px 15px;
&:hover{
    background-color: white;
    color: black;
    cursor: pointer;
}
`