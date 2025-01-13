import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { SiChromewebstore } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import './Card.css'




const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
    variants: [
        {
            props: ({ expand }) => !expand,
            style: {
                transform: 'rotate(0deg)',
            },
        },
        {
            props: ({ expand }) => !!expand,
            style: {
                transform: 'rotate(180deg)',
            },
        },
    ],
}));

export default function RecipeReviewCard({ title, img, desc, gitlink, demolink, tech }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        <SiChromewebstore />
                    </Avatar>
                }

                title={title}
            // subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                
                height='fit'
                image={img}
                alt="Project"
            />
            <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {desc}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="github">
                    <a href={gitlink}><FaGithub /></a>
                </IconButton>
                <IconButton aria-label="view">
                    <a href={demolink}>  <FaEye /></a>
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography sx={{ marginBottom: 2 }}>
                        Techonology:
                    </Typography>
                    <Typography sx={{ marginBottom: 2 }}>
                        {tech.map((item, indx) => (
                            <p className='technology' key={indx}>{item}</p>
                        ))}

                    </Typography>

                </CardContent>
            </Collapse>
        </Card>
    );
}
