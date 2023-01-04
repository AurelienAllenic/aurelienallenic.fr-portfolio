import React from 'react'
import { SectionTitle } from "../../style/General"
import { ExperienceContainer, Cards, Card, MainTitleCard, CodeAndLevel, Code, Level } from "../../style/Experience"

const Experience = () => {
    return (
        <>
            <section id="experience">
                <SectionTitle>Experience</SectionTitle>
                <ExperienceContainer>
                    <Cards>
                        <Card>
                            <MainTitleCard>Front-End Developpement</MainTitleCard>
                            <CodeAndLevel>
                                <Code>HTML</Code>
                                <Level>Experienced</Level>
                            </CodeAndLevel>
                            <CodeAndLevel>
                                <Code>CSS</Code>
                                <Level>Experienced</Level>
                            </CodeAndLevel>
                            <CodeAndLevel>
                                <Code>JavaScript</Code>
                                <Level>Intermediate</Level>
                            </CodeAndLevel>
                            <CodeAndLevel>
                                <Code>React</Code>
                                <Level>Intermediate</Level>
                            </CodeAndLevel>
                        </Card>

                        <Card>
                            <MainTitleCard>Back-End Developpement</MainTitleCard>
                            <CodeAndLevel>
                                <Code>NodeJs</Code>
                                <Level>Intermediate</Level>
                            </CodeAndLevel>
                            <CodeAndLevel>
                                <Code>MongoDb</Code>
                                <Level>Intermediate</Level>
                            </CodeAndLevel>
                            <CodeAndLevel>
                                <Code>PHP</Code>
                                <Level>Novice</Level>
                            </CodeAndLevel>
                            <CodeAndLevel>
                                <Code>MySQL</Code>
                                <Level>Novice</Level>
                            </CodeAndLevel>
                        </Card>
                    </Cards>
                </ExperienceContainer>
            </section>
        </>
    )
}

export default Experience