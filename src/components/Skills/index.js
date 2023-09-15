import React, { useEffect } from 'react'
import './skills.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import { BiSolidCheckSquare } from 'react-icons/bi'
import { motion } from 'framer-motion'

const Skills = (props) => {
    useEffect(() => {
        props.changePath();
    }, []);

  return (
    <motion.section
        initial={{ y: '200vh' }}
        animate={{ y: 0, transition: { duration: 0.5 } }}
    >
        <h5>What skills I have</h5>
        <h2>SKILLS</h2>
        <div className="container experience__container">
            <motion.div className="languages_frameworks"
                whileHover={{ scale: 1.1 }}
            >
                <h3>Languages and Technologies</h3>

                <h5>Languages</h5>
                <div className="skill_content">
                    <article className="experience_article">
                        <BsPatchCheckFill className="skill_icon" />
                        <div>
                            <h4>Java</h4>
                            <small className="text-light">Experienced</small>
                        </div>
                    </article>
                    <article className="experience_article">
                        <BsPatchCheckFill className="skill_icon"/>
                        <div>
                            <h4>C++</h4>
                            <small className="text-light">Intermediate</small>
                        </div>
                    </article>
                    <article className="experience_article">
                        <BsPatchCheckFill className="skill_icon"/>
                        <div>
                            <h4>Python</h4>
                            <small className="text-light">Experienced</small>
                        </div>
                    </article>
                    <article className="experience_article">
                        <BsPatchCheckFill className="skill_icon"/>
                        <div>
                            <h4>JavaScript</h4>
                            <small className="text-light">Intermediate</small>
                        </div>
                    </article>
                    <article className="experience_article">
                        <BsPatchCheckFill className="skill_icon"/>
                        <div>
                            <h4>C</h4>
                            <small className="text-light">Intermediate</small>
                        </div>
                    </article>
                    <article className="experience_article">
                        <BsPatchCheckFill className="skill_icon"/>
                        <div>
                            <h4>PHP</h4>
                            <small className="text-light">Beginner</small>
                        </div>
                    </article>
                    <article className="experience_article">
                        <BsPatchCheckFill className="skill_icon"/>
                        <div>
                            <h4>Kotlin</h4>
                            <small className="text-light">Intermediate</small>
                        </div>
                    </article>
                </div>

                <h5>Interfaces</h5>
                <div className="skill_content">
                    <article className="experience_article">
                        <BsPatchCheckFill className="skill_icon"/>
                        <div>
                            <h4>HTML</h4>
                            <small className="text-light">Experienced</small>
                        </div>
                    </article>
                    <article className="experience_article">
                        <BsPatchCheckFill className="skill_icon"/>
                        <div>
                            <h4>CSS</h4>
                            <small className="text-light">Experienced</small>
                        </div>
                    </article>
                </div>
                
                <h5>Frameworks and Technogies</h5>
                <div className="skill_content">
                    <article className="experience_article">
                        <BsPatchCheckFill className="skill_icon"/>
                        <div>
                            <h4>NodeJs</h4>
                            <small className="text-light">Experienced</small>
                        </div>
                    </article>
                    <article className="experience_article">
                        <BsPatchCheckFill className="skill_icon"/>
                        <div>
                            <h4>ReactJs</h4>
                            <small className="text-light">Intermediate</small>
                        </div>
                    </article>
                    <article className="experience_article">
                        <BsPatchCheckFill className="skill_icon"/>
                        <div>
                            <h4>JSP</h4>
                            <small className="text-light">Intermediate</small>
                        </div>
                    </article>
                </div>
            </motion.div>
            <motion.div className="tools"
                whileHover={{ scale: 1.1 }}
            >
                <h3>Databases and Tools</h3>
                <div className="databases_tools">
                    <h5>Databases</h5>
                    <div className="skill_content">
                        <article className="experience_article">
                            <BsPatchCheckFill className="skill_icon"/>
                            <div>
                                <h4>SQL</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience_article">
                            <BsPatchCheckFill className="skill_icon"/>
                            <div>
                                <h4>MongoDB</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience_article">
                            <BsPatchCheckFill className="skill_icon"/>
                            <div>
                                <h4>PostgreSQL</h4>
                                <small className="text-light">Beginner</small>
                            </div>               
                        </article>
                        <article className="experience_article">
                            <BsPatchCheckFill className="skill_icon"/>
                            <div>
                                <h4>Firebase</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                    </div>

                    <h5>Tools</h5>
                        <div className="skill_content">
                        <article className="experience_article">
                            <BiSolidCheckSquare className="skill_icon"/>
                            <div>
                                <h4>MySQL</h4>
                            </div>
                        </article>
                        <article className="experience_article">
                           <BiSolidCheckSquare className="skill_icon"/>
                            <h4>Git Github</h4>
                        </article>
                        <article className="experience_article">
                            <BiSolidCheckSquare className="skill_icon"/>
                            <h4>VsCode</h4>
                        </article>
                        <article className="experience_article">
                            <BiSolidCheckSquare className="skill_icon"/>
                            <h4>Postman</h4>
                        </article>
                        <article className="experience_article">
                            <BiSolidCheckSquare className="skill_icon"/>
                            <h4>Intellij</h4>
                        </article>
                        <article className="experience_article">
                            <BiSolidCheckSquare className="skill_icon"/>
                            <h4>AndoidStudio</h4>
                        </article>
                        <article className="experience_article">
                            <BiSolidCheckSquare className="skill_icon"/>
                            <h4>Figma</h4>
                        </article>
                        <article className="experience_article">
                            <BiSolidCheckSquare className="skill_icon"/>
                            <h4>Canva</h4>
                        </article>
                    </div>
                </div>
            </motion.div>
        </div>
    </motion.section>
  )
}

export default Skills