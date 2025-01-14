import React from 'react';
import OutlinedCard from './OutlinedCard';
import ImgNT from './Experienceassets/not found.jpg';

import Techohacks from './Experienceassets/TechoHacks.jpeg';
import Digi from './Experienceassets/DigiGrow.png';


const LeftExp = () => {
    return (
        <div>
            <div className="exp-right" style={{ marginTop: "20px" }}>
                <OutlinedCard title="DigiGrow" type="Remote Internship" year="2023" express="Learned a lot!" img={Digi} internproject={"Nextflix"} ProLink={"https://s15jn.github.io/digigrow/index.html"} projectDesc={"I created this responsive website using HTML, CSS, and JavaScript as part of my DigiGrow internship project, showcasing creativity and functionality."} />
                <OutlinedCard title="Oasis Infobyte" type="Remote Internship" year="2023" express="Learned a lot!" img={ImgNT} projectDesc={"Proficient in creating doctor landing pages using HTML and CSS, I deliver responsive and visually appealing designs to enhance user experience and drive conversions. Skilled in leveraging HTML and CSS to develop modern and feature-rich landing pages for medical professionals. Complete task assign by Oasis Infobyte ."} ProLink={"https://s15jn.github.io/OIBSIP/"} />
                <OutlinedCard title="HackHive" type="Hackathon" year="2023" express="Incredible journey" img={ImgNT} />
            </div>
        </div>
    );
}

export default LeftExp;
