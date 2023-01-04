import React from 'react'
import { NavBarContainerLeft, NavBarContainerRight, NavBarStyle, NavBarPosition, NavLinks, NavLink, SpanIcon } from "../../style/NavHome"
import { Link } from "react-scroll"
import { AiOutlineHome } from "react-icons/ai"
import { BsFillPersonFill } from "react-icons/bs"
import { BsFillBookmarkStarFill } from "react-icons/bs"
import { FaFolderOpen } from "react-icons/fa"
import { RiHeartAddFill } from "react-icons/ri"
import { BsFillChatDotsFill } from "react-icons/bs"

function NavHome() {
    return (
        <>
            <NavBarPosition>
                <NavBarStyle>
                    <NavBarContainerLeft>
                        <NavLinks>
                            <NavLink>
                                <Link className="link" to='home' spy={true} smooth={true} offset={0} duration={500}><SpanIcon><AiOutlineHome /></SpanIcon>Home</Link>
                            </NavLink>
                            <NavLink>
                                <Link className="link" to='about' spy={true} smooth={true} offset={0} duration={500}><SpanIcon><BsFillPersonFill /></SpanIcon>About</Link>
                            </NavLink>
                            <NavLink>
                                <Link className="link" to='experience' spy={true} smooth={true} offset={0} duration={500}><SpanIcon><BsFillBookmarkStarFill /></SpanIcon>Experience</Link>
                            </NavLink>
                        </NavLinks>
                    </NavBarContainerLeft>
                    <NavBarContainerRight>
                        <NavLinks>
                            <NavLink>
                                <Link className="link" to='portfolio' spy={true} smooth={true} offset={0} duration={500}><SpanIcon><FaFolderOpen /></SpanIcon>Portfolio</Link>
                            </NavLink>
                            <NavLink>
                                <Link className="link" to='interests' spy={true} smooth={true} offset={0} duration={500}><SpanIcon><RiHeartAddFill /></SpanIcon>Interests</Link>
                            </NavLink>
                            <NavLink>
                                <Link className="link" to='contact' spy={true} smooth={true} offset={0} duration={500}><SpanIcon><BsFillChatDotsFill /></SpanIcon>Contact</Link>
                            </NavLink>
                        </NavLinks>
                    </NavBarContainerRight>
                </NavBarStyle>
            </NavBarPosition>
        </>
    )
}

export default NavHome