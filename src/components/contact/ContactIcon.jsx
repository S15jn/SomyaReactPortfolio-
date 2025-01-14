import React from 'react';
import './ContactIcon.css'
import { motion } from "motion/react"
import ReactDOM from "react-dom";
import UseAnimations from 'react-useanimations';
import github from 'react-useanimations/lib/github';
import linkedin from 'react-useanimations/lib/linkedin';
// import instagram from 'react-useanimations/lib/instagram';


const ContactIcon = () => {
    const handleRedirect = (link) => {
        window.location.href = link;
    }
    return (

        <div className="btns">
            <div className="btnss">
                <motion.button whileHover={{
                    scale: 1.2,
                    transition: { duration: 1 },
                }}
                    whileTap={{ scale: 0.9 }} onClick={() => handleRedirect("https://github.com/S15jn")}>
                    {/* <GitHubIcon /> */}
                    <UseAnimations animation={github} className='ani' />
                </motion.button>
            </div>
            <div className="btnsss">
                <motion.button whileHover={{
                    scale: 1.2,
                    transition: { duration: 1 },
                }}
                    whileTap={{ scale: 0.9 }} onClick={() => handleRedirect("https://www.linkedin.com/in/somyajain2002/")}>
                    {/* <LinkedInIcon /> */}
                    <UseAnimations animation={linkedin} className='ani' />


                </motion.button>
            </div>

        </div>

    );
}

export default ContactIcon;
