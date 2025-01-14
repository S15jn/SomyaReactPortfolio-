import React from 'react';
import RecipeReviewCard from './Card';
import './Projects.css';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

import weatherImage from './projectassets/Weather.png';
import OCHI from './projectassets/Ochi.png';
import todo from './projectassets/Todo.png';
import Heading from '../Heading/heading';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

const Projects = () => {
    return (
        <div className="projects-section">
            <Heading heads={"Projects"} />
            <br /><br />
            <div className='project'>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid
                        container
                        spacing={{ xs: 3, md: 3 }}
                        columnSpacing={{ sm: 3, md: 10, xs: 2 }}
                        justifyContent="center" // Center horizontally
                        alignItems="center" // Center vertically if content height exceeds the screen
                    >
                        {/* ------------------------- */}
                        <Grid item xs={12} sm={6} md={4}>
                            <RecipeReviewCard
                                title={"OCHI"}
                                desc={"I developed the OCHI project using React and Tailwind CSS, incorporating seamless animations for an engaging and responsive user experience."}
                                gitlink={"https://github.com/S15jn/ochi_project"}
                                demolink={"https://ochi-project-nine.vercel.app/"}
                                tech={["react", "TailwindCSS", "JavaScript"]}
                                img={OCHI}
                            />
                        </Grid>

                        {/* ------------------------- */}
                        <Grid item xs={12} sm={6} md={4}>
                            <RecipeReviewCard
                                title={"WeatherApp"}
                                desc={"I developed the WeatherApp using React and Material UI, incorporating API integration for live weather data."}
                                gitlink={"https://github.com/S15jn/WeatherApp"}
                                demolink={"https://ochi-project-nine.vercel.app/"}
                                tech={["react", "MaterialUI", "JavaScript", "API"]}
                                img={weatherImage}
                            />
                        </Grid>

                        {/* ------------------------- */}
                        <Grid item xs={12} sm={6} md={4}>
                            <RecipeReviewCard
                                title={"TODO"}
                                desc={"A simple TODO application built using HTML, CSS, and JavaScript to manage tasks."}
                                gitlink={"https://github.com/S15jn/ochi_project"}
                                demolink={"https://ochi-project-nine.vercel.app/"}
                                tech={["HTML", "CSS", "JavaScript"]}
                                img={todo}
                            />
                        </Grid>

                    </Grid>
                </Box>
            </div>
        </div>
    );
};

export default Projects;
