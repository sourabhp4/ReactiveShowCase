import React from 'react'
import './works.css'
import { motion } from 'framer-motion'

import ReminderNoteIMG from '../../assets/OrganizePro.png'
import PortFolioIMG from '../../assets/PortfolioLogo.png'
import AgroPointIMG from '../../assets/AgroPoint.png'
import easycheezIMG from '../../assets/easyCheez.jpeg'
import SalesforceIMG from '../../assets/Salesforce.com_logo.png'

const Works = () => {
  return (
    <motion.section
        initial={{ y: '200vh' }}
        animate={{ y: 0, transition: { duration: 0.5 } }}
    >
        <h5>My involments</h5>
        <h2>MY WORKS</h2>

        <div className="container work__container">
            <div className="project_container">
                <h2>Projects</h2>
                <br />
                <div className="work_contents">
                    <motion.article className="work_content"
                        whileHover={{ scale: 1.1 }}
                    >
                        <div className="work_img">
                            <img src={ReminderNoteIMG} alt="ReminderNoteImage" />
                        </div>
                        <h4>OrganizePro</h4>
                        <small className="text-light">Technologies: Kotlin, NodeJS, MongoDB</small>
                        <div>
                            <h5>
                                Organize Pro is a feature-rich productivity app that offers 
                                seamless reminders, countdowns, to-do lists, and note-taking capabilities.  
                            </h5>
                        </div>
                        <a href="https://github.com/sourabhp4/OrganizePro" className="btn" target="_blank" rel="noreferrer">GoTo Github</a>
                    </motion.article>

                    <motion.article className="work_content"
                        whileHover={{ scale: 1.1 }}
                    >
                        <div className="work_img">
                            <img src={PortFolioIMG} alt="ReminderNoteImage" />
                        </div>
                        <h4>ReactiveShowCase</h4>
                        <small className="text-light">Technologies: ReactJS</small>
                        <div>
                            <h5>
                                ReactiveShowcase: Dynamic ReactJS portfolio 
                                displaying impressive projects, reflecting professionalism and creativity. 
                            </h5>
                        </div>
                        <a href="https://github.com/sourabhp4/ReactiveShowCase" className="btn" target="_blank" rel="noreferrer">GoTo Github</a>
                    </motion.article>

                    <motion.article className="work_content"
                        whileHover={{ scale: 1.1 }}
                    >
                        <div className="work_img">
                            <img src={AgroPointIMG} alt="AgroPointImage" />
                        </div>
                        <h4>Agro-Point</h4>
                        <small className="text-light">Technologies: ReactJS, NodeJS, MongoDB</small>
                        <div>
                            <h5>
                                AgriReviewHub is a cutting-edge platform that simplifies and encourages 
                                the exchange of valuable product reviews within the agriculture community.  
                            </h5>
                        </div>
                        <a href="https://github.com/sourabhp4/Agro-Point" className="btn" target="_blank" rel="noreferrer">GoTo Github</a>
                    </motion.article>
                </div>
            </div>
            
            <br />
            <div className="internship_container">
                <h3>Internships</h3>
                <br />
                <div className="work_contents">
                <motion.article className="work_content"
                        whileHover={{ scale: 1.1 }}
                >
                    <div className="work_img">
                        <img src={SalesforceIMG} alt="AgroPointImage" />
                    </div>
                    <h4>Salesforce Developer Virtual Internship</h4>
                    <small className="text-light">Technologies: Salesforce Platform</small>
                    <div className="center">
                        <strong>April 2023 - May 2023</strong>
                    </div>
                    <div>
                        <h5>
                            The Virtual Internship provided a hands-on experience as a Salesforce 
                            Developer by leveraging the Trailhead platform. 
                        </h5>
                    </div>
                    <a 
                    href="https://smartinternz.com/internships/salesforce_certificates/2864c252715c01e09de3dac606f6872c" 
                    className="btn" target="_blank" rel="noreferrer">
                        View Cerificate</a>
                </motion.article>

                <motion.article className="work_content"
                        whileHover={{ scale: 1.1 }}
                >
                    <div className="work_img">
                        <img src={easycheezIMG} alt="EasyCheezImage" />
                    </div>
                    <h4>Backend Developer</h4>
                    <small className="text-light">Technologies: NodeJS, MongoDB</small>
                    <div className="center">
                        <strong>August 2022 - January 2023</strong>
                    </div>
                    <div>
                        <h5>
                            A food delivery app that provides a platform to connect retailers with customers. 
                        </h5>
                    </div>
                    <a href="https://github.com/sourabhp4/client-backend" className="btn" target="_blank" rel="noreferrer">GoTo Github</a>
                </motion.article>
                </div>
            </div>
        </div>
    </motion.section>
  )
}

export default Works