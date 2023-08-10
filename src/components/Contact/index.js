
import './contact.css'

import React, { useRef } from 'react'
import emailjs from 'emailjs-com'

import { HiOutlineMail } from 'react-icons/hi'
import { AiFillLinkedin } from 'react-icons/ai'

const Contact = () => {
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


    return (
        <section>
            <h5>Get in Touch</h5>
            <h2>CONTACT ME</h2>

            <div className="container contact__container">

                <div className="contact_contents">
                    <div className="contact_content">
                        <HiOutlineMail size={25} />
                        <h3>Email</h3>
                        <small className="text-light">sourabhp94503@gmail.com</small><br/>
                        <a href="mailto:sourabhp94503@gmail.com" className="contact_link" target="_blank" rel="noreferrer">Send a message</a>
                    </div>
                    <div className="contact_content">
                        <AiFillLinkedin size={25}/>
                        <h3>LinkedIn</h3>
                        <small className="text-light">sourabh-p-a239a1228</small><br/>
                        <a href="https://www.linkedin.com/in/sourabh-p-a239a1228/message/" className="contact_link" target="_blank" rel="noreferrer">Send a message</a>
                    </div>
                </div>
                
                <div className="contact_content">
                    <h3>Message me</h3>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="name" placeholder="Your Name" required />
                        <input type="email" name="email" placeholder="Your email" required />
                        <textarea name="message" id="message" rows="6" placeholder="Write your message here"></textarea>
                        <input type="submit" className="btn" value="Send"/>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact