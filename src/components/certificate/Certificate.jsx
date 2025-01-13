
import React from 'react';
import MultiActionAreaCard from './MultiActionAreaCard';
import Heading from '../Heading/heading';
import Python from './certificateassets/python.jpg'
import IET from './certificateassets/IETCSS.jpg'
import HackCSS from './certificateassets/HackCSS.jpg'
import './Certificate.css'

const Certificate = () => {
    return (
        <div className='certificate'>
            <Heading heads={"Certificate"} />
            <br /> <br /> <br />
            <div className='card'>
                <MultiActionAreaCard title={"Python Programming"} desc={"certificate forpython by IIIT jablpur"} img={Python} />
                <MultiActionAreaCard title={"IET CSS Participation "} desc={"certificate forpython by IIIT jablpur"} img={IET} />
                <MultiActionAreaCard title={"Hackerrank CSS"} desc={"certificate forpython by IIIT jablpur"} img={HackCSS} />
                <MultiActionAreaCard title={"IOT 20-day valued added course"} desc={"certificate forpython by IIIT jablpur"} img={Python} />
            </div>
        </div>
    );
}

export default Certificate;
