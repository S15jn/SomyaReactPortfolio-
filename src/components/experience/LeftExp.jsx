import React from 'react';
import OutlinedCard from './OutlinedCard';




const LeftExp = () => {
    return (
        <div>
            <div className="exp-right" style={{ marginTop: "20px" }}>
                <OutlinedCard title="DigiGrow" type="Remote Internship" year="2023" express="Learned a lot!" />
                <OutlinedCard title="Oasis Infobyte" type="Remote Internship" year="2023" express="Learned a lot!" />
                <OutlinedCard title="HackHive" type="Hackathon" year="2020" express="Incredible journey" />
            </div>
        </div>
    );
}

export default LeftExp;
