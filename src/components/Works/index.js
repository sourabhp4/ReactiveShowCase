import React from 'react'
import './works.css'

import ReminderNoteIMG from '../../assets/OrganizePro.png'
import PortFolioIMG from '../../assets/PortfolioLogo.png'
import AgroPointIMG from '../../assets/AgroPoint.png'
import easycheezIMG from '../../assets/easyCheez.jpeg'
import SalesforceIMG from '../../assets/Salesforce.com_logo.png'

const Works = () => {
  return (
    <section>
        <h5>My involments</h5>
        <h2>MY WORKS</h2>

        <div className="container work__container">
            <div className="project_container">
                <h2>Projects</h2>
                <div className="work_contents">
                    <article className="work_content">
                        <div className="work_img">
                            <img src={ReminderNoteIMG} alt="ReminderNoteImage" />
                        </div>
                        <h4>OrganizePro</h4>
                        <small className="text-light">Technologies: Kotlin, NodeJS, MongoDB</small>
                        <br />
                        <a href="https://github.com/sourabhp4/OrganizePro" className="btn" target="_blank" rel="noreferrer">GoTo Github</a>
                    </article>

                    <article className="work_content">
                        <div className="work_img">
                            <img src={PortFolioIMG} alt="ReminderNoteImage" />
                        </div>
                        <h4>ReactiveShowCase</h4>
                        <small className="text-light">Technologies: ReactJS</small>
                        <br />
                        <a href="https://github.com/sourabhp4/ReactiveShowCase" className="btn" target="_blank" rel="noreferrer">GoTo Github</a>
                    </article>

                    <article className="work_content">
                        <div className="work_img">
                            <img src={AgroPointIMG} alt="AgroPointImage" />
                        </div>
                        <h4>Agro-Point</h4>
                        <small className="text-light">Technologies: ReactJS, NodeJS, MongoDB</small>
                        <br />
                        <a href="https://github.com/sourabhp4/Agro-Point" className="btn" target="_blank" rel="noreferrer">GoTo Github</a>
                    </article>
                </div>
            </div>
            
            <div className="internship_container">
                <h3>Internships</h3>
                <div className="work_contents">
                <article className="work_content">
                        <div className="work_img">
                            <img src={SalesforceIMG} alt="AgroPointImage" />
                        </div>
                        <h4>Salesforce Developer Virtual Internship</h4>
                        <small className="text-light">Technologies: Salesforce Platform</small>
                        <br />
                        <a href="https://github.com/sourabhp4/Agro-Point" className="btn" target="_blank" rel="noreferrer">View Cerificate</a>
                    </article>


                    <article className="work_content">
                        <div className="work_img">
                            <img src={easycheezIMG} alt="EasyCheezImage" />
                        </div>
                        <h4>Backend Developer</h4>
                        <small className="text-light">Technologies: NodeJS, MongoDB, Express Framework and REST</small>
                        <br />
                        <a href="https://github.com/sourabhp4/backend-easycheez_2.0" className="btn" target="_blank" rel="noreferrer">GoTo Github</a>
                    </article>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Works