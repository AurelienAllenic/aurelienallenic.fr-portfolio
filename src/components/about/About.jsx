import React from 'react'
import { Parallax } from 'react-parallax';
import HomeIMG from "../../assets/home.jpg"
import { ContainerAbout, Cards, Card, AboutIcon, AboutTitle, AboutSecondTitle, AboutContent } from "../../style/About"
const About = () => {
    return (
        <>
            <Parallax className='img-home' bgImage={HomeIMG} strength={500}>
                <ContainerAbout>
                    <Cards>
                        <Card>
                            <AboutIcon>Icon</AboutIcon>
                            <AboutTitle>Title</AboutTitle>
                            <AboutSecondTitle>Second Title</AboutSecondTitle>
                            <AboutContent>Content</AboutContent>
                        </Card>
                    </Cards>
                </ContainerAbout>
            </Parallax>
        </>
    )
}

export default About