import React from 'react'
import { ContainerAbout, Cards, Card, AboutIcon, AboutTitle, AboutSecondTitle, AboutContent } from "../../style/About"
import { SectionTitle } from '../../style/General';
import { FaMedal } from "react-icons/fa"
import { BsFillPersonFill } from "react-icons/bs"
import { FaFolderOpen } from "react-icons/fa"

const About = () => {
    return (
        <>

            <section id='about'>
                <SectionTitle>About</SectionTitle>
                <ContainerAbout>
                    <Cards>
                        <Card>
                            <AboutIcon><FaMedal /></AboutIcon>
                            <AboutTitle>Experience</AboutTitle>
                            <AboutSecondTitle>Etna :</AboutSecondTitle>
                            <AboutContent>piscine et suivi de la formation de septembre à février 2021/2022</AboutContent>
                            <AboutSecondTitle>Openclassrooms :</AboutSecondTitle>
                            <AboutContent>formation developpeur web démarrée le 22 fevrier 2022</AboutContent>
                        </Card>
                        <Card>
                            <AboutIcon><BsFillPersonFill /></AboutIcon>
                            <AboutTitle>Personnal Projects</AboutTitle>
                            <AboutSecondTitle>aurelienallenic.fr :</AboutSecondTitle>
                            <AboutContent>site réalisé en react</AboutContent>
                            <AboutSecondTitle>paroxx.com :</AboutSecondTitle>
                            <AboutContent>site réalisé avec un template envato</AboutContent>
                            <AboutSecondTitle>claquettes-swing.fr :</AboutSecondTitle>
                            <AboutContent>participation à la création et au déploiement</AboutContent>
                            <AboutSecondTitle>cleoperrin.com :</AboutSecondTitle>
                            <AboutContent>Portfolio à destination du milieu architectural et design</AboutContent>
                        </Card>
                        <Card>
                            <AboutIcon><FaFolderOpen /></AboutIcon>
                            <AboutTitle>Formation Projects</AboutTitle>
                            <AboutSecondTitle>Projets JavaScript :</AboutSecondTitle>
                            <AboutContent>bac à sable</AboutContent>
                            <AboutSecondTitle>Projets de développement web d'openclassrooms :</AboutSecondTitle>
                            <AboutContent>HTML, CSS, JavaScript, SEO, NodeJs, MongoDb, ReactJs</AboutContent>
                            <AboutSecondTitle>Projets de création de sites vitrines :</AboutSecondTitle>
                            <AboutContent>incluant du JS et du React</AboutContent>
                        </Card>
                    </Cards>
                </ContainerAbout>
            </section>
        </>
    )
}

export default About