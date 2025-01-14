import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ExperienceView from './ExperienceView';
import './OutlinedCard.css'

export default function OutlinedCard({ title, express, type, year, img, internproject, projectDesc, ProLink }) {
    return (
        <Box sx={{ minWidth: 275, margin: 2 }}>
            <Card variant="outlined" className='Cardss'>
                <CardContent>
                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 25 }}>
                        {title}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>{year}</Typography>
                    <Typography variant="body2">
                        {type}
                        <br /> <br />
                        {express}
                    </Typography>
                </CardContent>
                <CardActions className='button' style={{ textAlign: "center" }}>
                    <Button size="small"><ExperienceView img={img} internproject={internproject} projectdesc={projectDesc} projectlink={ProLink} /></Button>
                </CardActions>
            </Card>
        </Box>
    );
}
