import React from 'react'
import { IconsContainer, IconsPosition, Icon } from "../../style/Home"
import { FaGithub } from "react-icons/fa"
import { AiOutlineMail } from 'react-icons/ai'
import { BsLinkedin } from "react-icons/bs"

const Icons = () => {
    return (
        <>
            <IconsContainer>
                <IconsPosition>
                    <Icon href="https://github.com/AurelienAllenic?tab=repositories" target="_blank">
                        <FaGithub />
                    </Icon>
                    <Icon href="mailto:aurelien.allenic@gmail.com" target="_blank">
                        <AiOutlineMail />
                    </Icon>
                    <Icon href="https://www.linkedin.com/in/aur%C3%A9lien-allenic2000" target="_blank">
                        <BsLinkedin />
                    </Icon>
                </IconsPosition>
            </IconsContainer>
        </>
    )
}

export default Icons