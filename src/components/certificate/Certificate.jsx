
import React from 'react';
import MultiActionAreaCard from './MultiActionAreaCard';
import Heading from '../Heading/heading';
import Python from './certificateassets/python.jpg'
import IET from './certificateassets/IETCSS.jpg'
import HackCSS from './certificateassets/HackCSS.jpg'
import IOT from './certificateassets/IOT.jpg'
import './Certificate.css'

const Certificate = () => {
    return (
        <div className='certificate'>
            <Heading heads={"Certificate"} />
            <br /> <br /> <br />
            <div className='card'>
                <MultiActionAreaCard title={"Python Programming"} desc={"I received a certificate from IIIT Jabalpur for attending a 3-day workshop held at DAVV, enhancing my skills in Python Programming."} img={Python} />
                <MultiActionAreaCard title={"IET CSS Participation "} desc={"I received a certificate from IET DAVV for participating in the CSS Challenge held at IET DAVV, highlighting my involvement in the event."} img={IET} />
                <MultiActionAreaCard title={"Hackerrank CSS"} desc={"I received a certificate for passing the CSS test on HackerRank, showcasing my skills in CSS and front-end design."} img={HackCSS} />
                <MultiActionAreaCard title={"IOT 20-day valued added course"} desc={"Our team developed an IoT-based project named Fuel Guard during a 20-day course in college. It helps detect impurities in petrol, ensuring better fuel quality and engine performance."} img={IOT} />
            </div>
        </div>
    );
}

export default Certificate;
