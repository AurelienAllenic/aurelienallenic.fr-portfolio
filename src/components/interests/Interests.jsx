import React from 'react'
import { PositionCard, Cards, Card, Title, Logo, Content } from "../../style/Interests"
import { SectionTitle } from '../../style/General'
import { MdComputer } from "react-icons/md"
import { IoIosMusicalNotes } from "react-icons/io"
import { FaHandSparkles } from "react-icons/fa"
import { GiFist } from "react-icons/gi"
import { FaChessKnight } from "react-icons/fa"
import { BsFlagFill } from "react-icons/bs"

const Interests = () => {
    const data = [
        {
            id: 1,
            title: 'Programmation informatique',
            logo: <MdComputer />,
            content: "Web, data, créativité"
        },
        {
            id: 2,
            title: 'Piano',
            logo: <IoIosMusicalNotes />,
            content: "Classique et compositions cinématographiques"
        },
        {
            id: 3,
            title: 'Prestidigitation',
            logo: <FaHandSparkles />,
            content: "Close Up et scène"
        },
        {
            id: 4,
            title: 'Arts martiaux',
            logo: <GiFist />,
            content: "Fut Ga Quen Sil Lum, Judo, Wing Tsun"
        },
        {
            id: 5,
            title: 'Echecs',
            logo: <FaChessKnight />,
            content: "pratique stratégique et intellectuelle"
        },
        {
            id: 6,
            title: 'Langues',
            logo: <BsFlagFill />,
            content: "Anglais/Espagnol: B2 - Japonais/Allemand : novice",
        },

    ]
    return (
        <>
            <section id="interests">
                <SectionTitle>Interests</SectionTitle>
                <PositionCard>
                    <Cards>
                        {data.map(({ id, title, logo, content }) => (<Card key={id}>
                            <Title>{title}</Title>
                            <Logo>{logo}</Logo>
                            <Content>{content}</Content>
                        </Card>))}
                    </Cards>
                </PositionCard>
            </section>
        </>
    )
}

export default Interests