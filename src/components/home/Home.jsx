import React from 'react'
import { Parallax } from 'react-parallax';
import HomeIMG from "../../assets/about.jpg"
import { HomeContainer, InfosContainer, ButtonsContainer, LinkHome, LinkHome2, MainTitle, SecondTitle } from '../../style/Home'
import NavHome from '../nav/Nav';
import Icons from './Icons';
import CV from "../../assets/CV.pdf"
import Motivation from "../../assets/motivation.docx"
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <>
            <section id='home'>
                <Parallax className='img-home' bgImage={HomeIMG} strength={500}>
                    <HomeContainer>
                        <InfosContainer>
                            <MainTitle>Aurélien Allenic</MainTitle>
                            <SecondTitle>Web Developper</SecondTitle>
                            <ButtonsContainer>
                                <LinkHome href={CV} download>Download CV</LinkHome>
                                <LinkHome href={Motivation}>Motivation letter</LinkHome>
                                <LinkHome href="#contact">Contact</LinkHome>
                            </ButtonsContainer>
                        </InfosContainer>
                        <Icons />
                    </HomeContainer>
                </Parallax>
            </section>
        </>
    )
}

export default Home