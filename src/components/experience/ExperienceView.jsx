import React, { useState } from 'react';
import { Button, Modal, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';




const ExperienceView = ({ img, internproject, projectdesc, projectlink }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button size="small" color="primary" onClick={handleOpen}>
                More
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="project-modal"
                aria-describedby="project-details"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '80%',
                        maxWidth: 400,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        borderRadius: '8px',
                        p: 2,
                        outline: 'none',
                        textAlign: 'center',
                    }}
                >
                    <IconButton onClick={handleClose} sx={{ position: 'absolute', top: 8, right: 8 }}>
                        <CloseIcon />
                    </IconButton>
                    <img src={img} alt="Project" style={{ width: '100%', height: 'auto', borderRadius: '4px' }} />
                    <Typography variant="h6" sx={{ marginTop: 2 }}>
                        Project Created During Internship <br /> {internproject}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', marginTop: 1 }}>
                        Developed With: <br /> {projectdesc}
                    </Typography>
                    <Button
                        sx={{ marginTop: 2 }}
                        variant="outlined"
                        color="primary"
                        href={projectlink}
                        target="_blank"
                    >
                        Visit Project
                    </Button>
                </Box>
            </Modal>
        </div>
    );
};


export default ExperienceView;
