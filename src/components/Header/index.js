import React from 'react'
import { Link } from 'react-router-dom'

import './header.css'

import LogoIMG from '../../assets/logo3.png'

const header = () => {
  return (
    <>
        <div className="header">
            <div className="header_content1">
                <a href="/"><img src={LogoIMG} alt="Logo" /></a>
            </div>
            <div className="header_content2">
                <Link className="resume" to="/resume" ><strong>Resume</strong></Link>
            </div>
        </div>
    </>
  )
}

export default header