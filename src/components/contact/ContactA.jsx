import React from 'react';
import { FaCodeFork } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const ContactA = () => {
    return (
        <div>
            <a href='#'
                style={{ textDecoration: 'none', color: 'inherit', display: 'inline-flex', alignItems: 'center' }}

            ><IoMdMail />&nbsp; somujn10@gmail.com</a>
            <p>
                <a
                    href="#"
                    style={{ textDecoration: 'none', color: 'inherit', display: 'inline-flex', alignItems: 'center' }}
                >
                    Help me to improve &nbsp; <FaCodeFork />
                </a>
            </p>


        </div>
    );
}

export default ContactA;
