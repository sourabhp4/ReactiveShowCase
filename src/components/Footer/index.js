import React from 'react'
import './footer.css'

import { BsLinkedin, BsGithub } from 'react-icons/bs'

const footer = () => {
    return (
        <>
            <div className="footer">
                <div>
                    <svg
                        className="waves"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 24 150 28"
                        preserveAspectRatio="none"
                        shapeRendering="auto"
                    >
                        <defs>
                            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                        </defs>
                        <g className="parallax">
                            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
                            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                        </g>
                    </svg>
                </div>
                <div className="footer_content">
                    <h2>Feel free to connect</h2>
                    <a href="https://github.com/sourabhp4" target="_blank" rel="noreferrer">
                        <BsGithub className="icon" size={30} />
                    </a>
                    <a href="https://www.linkedin.com/in/sourabh-p-a239a1228/" target="_blank" rel="noreferrer">
                        <BsLinkedin className="icon" size={30} />
                    </a>
                    <div className="footer_content">
                        <p>
                            Designed and Developed by <strong>SOURABH P</strong> <br />
                            All &copy; Rights Reserved
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default footer