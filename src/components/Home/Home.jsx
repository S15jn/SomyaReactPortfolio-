import React from 'react';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import Button from '@mui/material/Button';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import Cv from './Homeassets/Somya_Jain_Resume _Final.pdf'; 
import './Home.css';

const Home = () => {
    const handleDownloadClick = () => {
        window.open(Cv, '_blank');
    };

    return (
        <div className="home">
            <div className="home-info">
                <p>
                    Hey I'm Somya Jain &nbsp; &nbsp; <span className="wave"><WavingHandIcon /></span>
                </p>
                <h1>Full Stack <br />Developer</h1>
            </div>
            <div className="home-btn">
                <Button
                    variant="contained"
                    endIcon={<ArrowCircleDownIcon />}
                    className="btn"
                    onClick={handleDownloadClick}
                >
                    Download CV
                </Button>
            </div>
        </div>
    );
};

export default Home;
