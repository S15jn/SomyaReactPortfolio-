import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CertificateView from './CertificateView';
import './MultiActionAreaCard.css'



export default function MultiActionAreaCard({ img, title, desc }) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={img}
                    alt="Certificate"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {desc}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>

                <div className='imgView' >
                    <CertificateView img={img} />
                </div>

            </CardActions>
        </Card>
    );
}
