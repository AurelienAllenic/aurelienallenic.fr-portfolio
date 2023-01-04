import styled from "styled-components";
import colors from "./Colors";

export const NavBarPosition = styled.div`
    width: 100%;
    min-height: 54.2vh;
    height: auto;
`
export const NavBarStyle = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
padding-left: 25px;
padding-right: 25px;
position: absolute;
top: 22%;
width: 100%;
`
export const NavBarContainerLeft = styled.div`
margin-right: 10%;
width: 50%;
padding-left: 20px;
`
export const NavBarContainerRight = styled.div`
margin-left: 50%;
width: 50%;
padding-right: 20px;
`
export const NavLinks = styled.ul`
grid-template-columns: repeat(1fr, 1);
`
export const NavLink = styled.li`
color: white;
font-size: 35px;
grid-template-columns: repeat(1fr, 1);
margin-bottom: 30px;
padding: 25px;
color: ${colors.primary};
`
export const SpanIcon = styled.span`
    padding-right: 10px;
    padding-left: 10px;
`