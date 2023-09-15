
import './contact.css'

import React, { useRef, useEffect } from 'react'
import emailjs from 'emailjs-com'
import { motion } from 'framer-motion'

import { HiOutlineMail } from 'react-icons/hi'
import { AiFillLinkedin } from 'react-icons/ai'

const Contact = (props) => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_tghe4hn', 'template_c9hhrr6', form.current, 'qdaocjYbsz6v_Blz-')
        .then((result) => {
            console.log(result.text)
        }, (error) => {
            console.log(error.text)
        })

        e.target.reset()
    }

    useEffect(() => {
        props.changePath();
    }, []);    

    return (
        <motion.section
            initial={{ y: '200vh'}}
            animate={{ y: 0, transition: { duration: 0.5 } }}
        >
            <h5>Get in Touch</h5>
            <h2>CONTACT ME</h2>

            <div className="container contact__container">

                <div className="contact_contents">
                    <motion.div className="contact_content"
                        whileHover={{ scale: 1.1 }}
                    >
                        <HiOutlineMail size={25} />
                        <h3>Email</h3>
                        <small className="text-light">sourabhp94503@gmail.com</small><br/>
                        <a href="mailto:sourabhp94503@gmail.com" className="contact_link" target="_blank" rel="noreferrer">Send a message</a>
                    </motion.div>
                    <motion.div className="contact_content"
                        whileHover={{ scale: 1.1 }}
                    >
                        <AiFillLinkedin size={25}/>
                        <h3>LinkedIn</h3>
                        <small className="text-light">sourabh-p-a239a1228</small><br/>
                        <a href="https://www.linkedin.com/in/sourabh-p-a239a1228/message/" className="contact_link" target="_blank" rel="noreferrer">Send a message</a>
                    </motion.div>
                </div>
                
                <motion.div className="contact_content"
                        whileHover={{ scale: 1.1 }}
                >
                    <h3>Message me</h3>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="name" placeholder="Your Name" required />
                        <input type="email" name="email" placeholder="Your email" required />
                        <textarea name="message" id="message" rows="6" placeholder="Write your message here"></textarea>
                        <input type="submit" className="btn" value="Send"/>
                    </form>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Contact