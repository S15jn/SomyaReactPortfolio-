import React from 'react';
import SkillSet from './SkillSet';
import Heading from '../Heading/heading';
import './Skll.css';


const Skill = () => {

    return (
        <div className='skill'>

            <Heading heads={"Skil"} />
            <br />
            <br /><br />
            <SkillSet />

        </div>
    );
}

export default Skill;
