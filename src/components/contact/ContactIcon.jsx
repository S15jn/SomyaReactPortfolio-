import React from 'react';
import './ContactIcon.css'

import ReactDOM from "react-dom";
import UseAnimations from 'react-useanimations';
import github from 'react-useanimations/lib/github';
import linkedin from 'react-useanimations/lib/linkedin';
import instagram from 'react-useanimations/lib/instagram';


const ContactIcon = () => {
    const handleRedirect = (link) => {
        window.location.href = link;
    }
    return (

        <div className="btns">
            <div className="btnss">
                <button onClick={() => handleRedirect("https://github.com/S15jn")}>
                    {/* <GitHubIcon /> */}
                    <UseAnimations animation={github} />
                </button>
            </div>
            <div className="btnsss">
                <button onClick={() => handleRedirect("https://www.linkedin.com/feed/")}>
                    {/* <LinkedInIcon /> */}
                    <UseAnimations animation={linkedin} />


                </button>
            </div>
            <div className="btnss">
                <button onClick={() => handleRedirect("https://www.instagram.com/")}>
                    {/* <InstagramIcon /> */}
                    <UseAnimations animation={instagram} />


                </button>
            </div>

        </div>

    );
}

export default ContactIcon;
