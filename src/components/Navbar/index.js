import React, { useState, useEffect } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai'
import { RiLightbulbFlashLine } from 'react-icons/ri'
import { BsRocketTakeoffFill } from 'react-icons/bs'
import { AiOutlinePhone } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'

function Navbar(props) {
    const [bottom, setBottom] = useState(2)

    const handleScroll = () => {
        const scrolledHeight = window.innerHeight + window.scrollY
        const fullHeight = document.body.scrollHeight
        const percentage = (scrolledHeight / fullHeight) * 100

        if (percentage >= 90) {
            setBottom(9)
        } else {
            setBottom(2)
        }
    };

    useEffect(() => {
        handleScroll()
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <nav style={{ bottom: `${bottom}rem`, transition: 'all 400ms ease' }}>
            <Link className={! ['skills', 'works', 'resume', 'contact'].includes(props.path) ? "link-current" : "link"}  to="/"> <AiOutlineHome /> </Link>
            <Link className={props.path === 'skills' ? "link-current" : "link"} to="/skills"> <RiLightbulbFlashLine /> </Link>
            <Link className={props.path === 'works' ? "link-current" : "link"}  to="/works"> <BsRocketTakeoffFill /> </Link>
            <Link className={props.path === 'resume' ? "link-current" : "link"} to="/resume"> <CgProfile /> </Link>
            <Link className={props.path === 'contact' ? "link-current" : "link"} to="/contact"> <AiOutlinePhone /> </Link>
        </nav>
    )
}

export default Navbar