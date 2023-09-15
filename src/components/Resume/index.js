import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

import './resume.css'

const Resume = (props) => {
  useEffect(() => {
      props.changePath();
  }, []);

  return (
    <motion.section
        initial={{ y: '200vh' }}
        animate={{ y: 0, transition: { duration: 0.5 } }}
    >
        <h5>Checkout</h5>
        <h2>MY RESUME</h2>
        <div className="resume_content">
            <iframe className="resume_iframe"
            title="Resume Preview"
            src="https://drive.google.com/file/d/1c19VqXtZx16k9jlpkJJDqbeuSnvs4vyS/preview"
            width="75%"
            height="600px"
            ></iframe>
        </div>
    </motion.section>
  )
}

export default Resume