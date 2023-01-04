import React from 'react'
import { Parallax } from 'react-parallax';
import HomeIMG from "../../assets/about.jpg"
import { HomeContainer, ButtonsContainer, LinkHome, MainTitle, SecondTitle } from '../../style/Home'
import NavHome from '../nav/Nav';
import Icons from './Icons';
import CV from "../../assets/CV.pdf"
import Motivation from "../../assets/motivation.docx"

const Home = () => {
    return (
        <>
            <section id='home'>
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
            </section>
        </>
    )
}

export default Home