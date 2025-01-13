import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';

import './SkillSet.css'
import SkillLink from './SkillLink';

const Items = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#b74d5b',
    }),
}));



const SkillSet = () => {
    const Array = SkillLink();
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {Array.map((item, index) => (
                        <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
                            <Items className='item '>{item}</Items>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    );
}

export default SkillSet;
