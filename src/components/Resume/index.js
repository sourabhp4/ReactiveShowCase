import React from 'react'

import './resume.css'

const resume = () => {
  return (
    <section>
        <h5>Checkout</h5>
        <h2>MY RESUME</h2>
        <div className="resume_content">
            <iframe className="resume_iframe"
            title="Resume Preview"
            src="https://drive.google.com/file/d/1YVijqMdZiPSBYtBVOftz1h2mH6Yidj6C/preview"
            width="80%"
            height="600px"
            ></iframe>
        </div>
    </section>
  )
}

export default resume