import React from 'react';
import OutlinedCard from './OutlinedCard';


const RightExp = () => {
    return (
        <div className="exp-right">
            <OutlinedCard title="TechnoHacks" type="Remote Internship" year="2023" express="Amazing experience" />

            <OutlinedCard title="Bharat Intern" type="Remote Internship" year="2021" express="Learned a lot!" />
            <OutlinedCard title="HackSquad" type="Remote" year="2020" express="Incredible journey" />
        </div>
    );
}

export default RightExp;
