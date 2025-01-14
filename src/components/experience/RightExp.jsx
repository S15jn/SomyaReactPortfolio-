import React from 'react';
import OutlinedCard from './OutlinedCard';
import ImgNT from './Experienceassets/not found.jpg';
import Techohacks from './Experienceassets/TechoHacks.jpeg';
import Bharat from './Experienceassets/BharatIntern.png';
const RightExp = () => {
    return (
        <div className="exp-right">
            <OutlinedCard title="TechnoHacks" type="Remote Internship" year="2023" express="Amazing experience" img={Techohacks} projectDesc={"Designed and developed a calculator using HTML, CSS, and JavaScript for efficient calculations .Complete My Internship task TechnoHacks EduTech."} ProLink={"https://s15jn.github.io/calculator/calculator"} />

            <OutlinedCard title="Bharat Intern" type="Remote Internship" year="2021" express="Learned a lot!" img={Bharat} projectDesc={"I successfully completed a project assigned by Bharat Intern to create the home page of the Netflix website using HTML and CSS."} ProLink={"https://s15jn.github.io/task1/"} />
            <OutlinedCard title="WittyHacks" type="Hackathon" year="2024" express="Incredible Experience of Hackathon" img={ImgNT} />
        </div>
    );
}

export default RightExp;
