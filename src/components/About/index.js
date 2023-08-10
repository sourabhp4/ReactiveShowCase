import React from 'react'
import './about.css'

import TypeWriter from './typeLooper' 

import logoIMG from '../../assets/PortfolioLogo.png'
import codeIMG from '../../assets/logo.jpg'

const About = () => {
  return (
    <section>
        <div className="container about__container">
            <div className="about_contents">
                <div className="about_content1">
                    <h2>
                        Hey there... <br />
                    </h2>
                    <h1>I'm SOURABH P</h1>
                    <h2>
                        <TypeWriter />
                    </h2>
                </div>
                <div className="about_image1">
                    <img src={logoIMG} alt="Context" />
                </div>
            </div>
            
            <div className="about_contents">
                <div className="about_content2">
                    <h1>LET ME INTRODUCE MYSELF</h1>
                    <p className="about_para">I fell in love with <strong>programming</strong> and I have at least learnt
                        something, I think… 🤷‍♂️</p>
                    <p className="about_para">
                        Programming has captured my heart 🚀, and with each line of code, I've uncovered a world of endless possibilities. 
                        My journey has taken me into the <strong>realm of web applications</strong> 🌐 📱 and the captivating realm of <strong>Android app development</strong>. 
                         With every challenge and triumph 🌟, I've come to realize that there's always something new to learn and create. 
                        📚✨ Embracing the thrill of coding, I'm excited to see where this path leads me next. 👨‍💻 
                    </p>
                </div>
                <div className="about_image2">
                    <img src={codeIMG} alt="Context" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About