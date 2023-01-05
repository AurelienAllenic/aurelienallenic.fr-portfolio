import React from 'react'
import { Link } from "react-scroll"
import { Parallax } from 'react-parallax';
import HomeIMG from "../../assets/about.jpg"
import { ContactContainer, CardsContainer, FormContainer, Cards, Card, Title, Icon, LinkContact, InputStyle, Message, Validation, GoTopContainer, GoToTop, SpanIcon } from "../../style/Contact"
import { SectionTitle } from '../../style/General';
import { AiOutlineMail, AiOutlineArrowUp } from "react-icons/ai"
import { BsChatText, BsWhatsapp } from "react-icons/bs"
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ohqoijk', 'template_w9q6vir', form.current, 'dWzWUkYBQ9ERFSUxC')

        e.target.reset();
        alert('message envoyé')

    };
    return (
        <>
            <section id='contact'>
                <Parallax className='img-home' bgImage={HomeIMG} strength={500}>
                    <SectionTitle>Contact</SectionTitle>
                    <ContactContainer>
                        <CardsContainer>
                            <Cards>
                                <Card><Icon><AiOutlineMail /></Icon>
                                    <Title>Email</Title>
                                    <LinkContact href="/">Send a message</LinkContact>
                                </Card>
                                <Card><Icon><BsChatText /></Icon>
                                    <Title>Messenger</Title>
                                    <LinkContact href="/">Send a message</LinkContact>
                                </Card>
                                <Card>
                                    <Icon><BsWhatsapp /></Icon>
                                    <Title>Whattsapp</Title>
                                    <LinkContact href="/">Send a message</LinkContact>
                                </Card>
                            </Cards>
                            <FormContainer ref={form} onSubmit={sendEmail}>
                                <InputStyle id='name' type="text" name='name' placeholder='Your full name' required ></InputStyle>
                                <InputStyle id='email' type="email" name='email' placeholder='Your Email' required ></InputStyle>
                                <Message id='textarea' name="message" placeholder='Your message' rows="7" required ></Message>
                                <Validation type='submit'>Send</Validation>
                            </FormContainer>
                        </CardsContainer>
                    </ContactContainer>
                    <GoTopContainer>
                        <Link to='home' spy={true} smooth={true} offset={0} duration={1000}><GoToTop href="home"><SpanIcon><AiOutlineArrowUp /></SpanIcon></GoToTop></Link>
                    </GoTopContainer>
                </Parallax>
            </section>
        </>
    )
}

export default Contact