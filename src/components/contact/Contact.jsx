import React from 'react';
import Heading from '../Heading/heading';


import './Contact.css';
import ContactIcon from './ContactIcon';
import ContactA from './ContactA';

const Contact = () => {
    const handleRedirect = (link) => {
        window.location.href = link;
    };

    return (
        <div>
            <Heading heads={"Contact"} />
            <footer>
                <div className="icons">
                    <ContactIcon />
                </div>
                <div className='liness'>

                </div>
                <div className="cont-text">
                    <ContactA />



                </div>

            </footer>
            <div className="dev">
                &copy; Developed By Somya Jain
            </div>
        </div>
    );
};

export default Contact;
