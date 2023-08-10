import React from 'react'
import './footer.css'

import { BsLinkedin, BsGithub } from 'react-icons/bs'

const footer = () => {
  return (
    <>
        <div className="footer">
            <div className="footer_content">
                <h2>Feel free to connect</h2>
            </div>
            <a href="https://github.com/sourabhp4" target="_blank" rel="noreferrer">
                <BsGithub className="icon" size={30}/>
            </a>
            <a href="https://www.linkedin.com/in/sourabh-p-a239a1228/" target="_blank" rel="noreferrer">
                <BsLinkedin className="icon" size={30}/>
            </a>
            <div className="footer_content">
                <p>
                    Designed and Developed by <strong>SOURABH P</strong> <br /> 
                    All &copy; Rights Reserved
                </p>
            </div>
        </div>
    </>
  )
}

export default footer