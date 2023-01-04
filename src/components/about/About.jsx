import React from 'react'
import { ContainerAbout, Cards, Card, AboutIcon, AboutTitle, AboutSecondTitle, AboutSecondTitleLink, AboutContent } from "../../style/About"
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
                            <AboutSecondTitleLink href='https://etna.io/' target="_blank">Etna :</AboutSecondTitleLink>
                            <AboutContent>piscine et suivi de la formation de septembre à février 2021/2022</AboutContent>
                            <AboutSecondTitleLink href='https://openclassrooms.com/' target="_blank">Openclassrooms :</AboutSecondTitleLink>
                            <AboutContent>formation developpeur web démarrée le 22 fevrier 2022, terminée le 6 novembre 2022.<br /> En attente de validation finale</AboutContent>
                        </Card>
                        <Card>
                            <AboutIcon><BsFillPersonFill /></AboutIcon>
                            <AboutTitle>Personnal Projects</AboutTitle>
                            <AboutSecondTitleLink href='https://aurelienallenic.fr' target="_blank">aurelienallenic.fr :</AboutSecondTitleLink>
                            <AboutContent>site réalisé en react</AboutContent>
                            <AboutSecondTitleLink href='https://paroxx.com' target="_blank">paroxx.com :</AboutSecondTitleLink>
                            <AboutContent>site réalisé avec un template envato</AboutContent>
                            <AboutSecondTitleLink href='https://claquettes-swing.fr' target="_blank">claquettes-swing.fr :</AboutSecondTitleLink>
                            <AboutContent>participation à la création et au déploiement</AboutContent>
                            <AboutSecondTitleLink href='https://cleoperrin.com' target="_blank">cleoperrin.com :</AboutSecondTitleLink>
                            <AboutContent>Portfolio à destination du milieu architectural et design</AboutContent>
                        </Card>
                        <Card>
                            <AboutIcon><FaFolderOpen /></AboutIcon>
                            <AboutTitle>Formation Projects</AboutTitle>
                            <AboutSecondTitle>Projets de développement web d'openclassrooms :</AboutSecondTitle>
                            <AboutContent>HTML, CSS, JavaScript, SEO, NodeJs, MongoDb, ReactJs</AboutContent>
                            <AboutSecondTitle>Projets de création de sites vitrines :</AboutSecondTitle>
                            <AboutContent>incluant du JS et du React</AboutContent>
                            <AboutSecondTitle>Projets JavaScript :</AboutSecondTitle>
                            <AboutContent>bac à sable</AboutContent>
                        </Card>
                    </Cards>
                </ContainerAbout>
            </section>
        </>
    )
}

export default About