import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai'
import { RiLightbulbFlashLine } from 'react-icons/ri'
import { BsRocketTakeoffFill } from 'react-icons/bs'
import { AiOutlinePhone } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import {useState} from 'react'

function Navbar(props) {
    const [currentNav, setState] = useState(props.state)

    return (
        <nav>
            <Link className={currentNav === 'about' ? "link-current" : "link"} onClick={() => setState("about")} to="/"> <AiOutlineHome /> </Link>
            <Link className={currentNav === 'skills' ? "link-current" : "link"} onClick={() => setState("skills")} to="/skills"> <RiLightbulbFlashLine /> </Link>
            <Link className={currentNav === 'works' ? "link-current" : "link"} onClick={() => setState("works")} to="/works"> <BsRocketTakeoffFill /> </Link>
            <Link className={currentNav === 'resume' ? "link-current" : "link"} onClick={() => setState("resume")} to="/resume"> <CgProfile /> </Link>
            <Link className={currentNav === 'contact' ? "link-current" : "link"} onClick={() => setState("contact")} to="/contact"> <AiOutlinePhone /> </Link>
        </nav>
    )
}

export default Navbar