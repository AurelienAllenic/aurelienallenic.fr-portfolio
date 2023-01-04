import React from 'react'
import { Parallax } from 'react-parallax';
import HomeIMG from "../../assets/home.jpg"
import { MainTitle, SecondTitle } from '../../style/General';
import { HomeContainer, ButtonsContainer, LinkHome, LinkHome2 } from '../../style/Home'
import NavHome from '../nav/Nav';
import Icons from './Icons';
import { Link } from "react-scroll"
import CV from "../../assets/CV.pdf"
import Motivation from "../../assets/motivation.docx"

const Home = () => {
    return (
        <>
            <Parallax className='img-home' bgImage={HomeIMG} strength={500}>
                <HomeContainer>
                    <MainTitle>Aurélien Allenic</MainTitle>
                    <SecondTitle>Web Developper</SecondTitle>
                    <ButtonsContainer>
                        <LinkHome href={CV} download>Download CV</LinkHome>
                        <LinkHome href={Motivation}>Motivation letter</LinkHome>
                        <LinkHome href="/contact">Contact me</LinkHome>
                    </ButtonsContainer>
                </HomeContainer>
                <NavHome />
                <Icons />

            </Parallax>
        </>
    )
}

export default Home