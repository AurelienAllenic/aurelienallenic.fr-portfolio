import React from 'react'
import { PortfolioContainer, CardsContainer, Card, ImageCard, ContentCard, Buttons, Link } from "../../style/Portfolio"
import { SectionTitle } from '../../style/General'
import Booki from '../../assets/portfolio/booki.webp'
import Ohmyfood from '../../assets/portfolio/ohmyfood.jpg'
import Lapanthere from '../../assets/portfolio/lapanthere.jpg'
import Kanap from '../../assets/portfolio/kanap.webp'
import Piiquante from '../../assets/portfolio/piiquante.webp'
import Groupomania from '../../assets/portfolio/groupomania.webp'

const Portfolio = () => {
    const data = [
        {
            id: 1,
            image: Booki,
            title: 'Booki, projet de site de réservation hôtelier réalisé en HTML/CSS',
            github: 'https://github.com/AurelienAllenic/Booki',
            demo: 'https://aurelienallenic.github.io/Booki/'
        },
        {
            id: 2,
            image: Ohmyfood,
            title: 'Ohmyfood, site gastronomique réalisé en HTML, CSS et SCSS',
            github: 'https://github.com/AurelienAllenic/AurelienAllenic.github.io',
            demo: 'https://aurelienallenic.github.io/ohmyfood.github.io/'
        },
        {
            id: 3,
            image: Lapanthere,
            title: "Lapanthere, site de web design basée à Lyon, projet d'amélioration SEO d'un site existant",
            github: 'https://github.com/AurelienAllenic/lapanthere.github.io',
            demo: 'https://aurelienallenic.github.io/lapanthere.github.io/'
        },
        {
            id: 4,
            image: Kanap,
            title: 'Kanap, site e-commerce réalisé en javaScript HTML, CSS',
            github: 'https://github.com/AurelienAllenic/kanap-p5-openclassrooms',
            demo: 'https://github.com/AurelienAllenic/kanap-p5-openclassrooms'
        },
        {
            id: 5,
            image: Piiquante,
            title: 'Hot-takes, api de like et partage de sauces pimentées réalisé en nodeJs et en Js',
            github: 'https://github.com/AurelienAllenic/hot-takes',
            demo: 'https://github.com/AurelienAllenic/hot-takes'
        },
        {
            id: 6,
            image: Groupomania,
            title: "Groupomania, réseau social d'entreprise réalisé avec ReactJs et NodeJs",
            github: 'https://github.com/AurelienAllenic/groupomania/tree/develop',
            demo: 'https://github.com/AurelienAllenic/groupomania/tree/develop'
        },

    ]
    return (
        <>
            <section id="portfolio">
                <SectionTitle>Portfolio</SectionTitle>
                <PortfolioContainer>
                    <CardsContainer>
                        {data.map(({ id, image, title, github, demo }) => (
                            <Card key={id}>
                                <ImageCard src={image} />
                                <ContentCard>{title}</ContentCard>
                                <Buttons>
                                    <Link href={github} target="_blank">Github</Link>
                                    <Link href={demo} target="_blank">Live Demo</Link>
                                </Buttons>
                            </Card>
                        ))}
                    </CardsContainer>
                </PortfolioContainer>
            </section>
        </>
    )
}

export default Portfolio