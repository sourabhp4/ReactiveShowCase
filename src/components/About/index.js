import React from 'react'
import './about.css'

import logoIMG from '../../assets/logo.jpg'

const About = () => {
  return (
    <section>
        <div className="container about__container">
            <div className="about_content">
                <h2>
                    Hi There... <br />
                    I'M <i>SOUARBH P</i> <br />
                    FULLL STACK DEVELOPER | APP DEVELOPER
                </h2>
            </div>
            <div className="about_image">
                <img src={logoIMG} alt="Context" />
            </div>
        </div>
    </section>
  )
}

export default About