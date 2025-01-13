import React, { useState } from "react";
import { Button, Modal, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const CertificateView = ({ img }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>

            <Button size="small" color="primary" onClick={handleOpen}>
                View
            </Button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="certificate-modal"
                aria-describedby="certificate-preview"
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "80%",
                        maxWidth: 600,
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        borderRadius: "8px",
                        p: 2,
                        outline: "none",
                        textAlign: "center",
                    }}
                >

                    <IconButton
                        onClick={handleClose}
                        sx={{ position: "absolute", top: 8, right: 8 }}
                    >
                        <CloseIcon />
                    </IconButton>


                    <img
                        src={img}
                        alt="Certificate"
                        style={{ width: "100%", height: "auto", borderRadius: "4px" }}
                    />
                </Box>
            </Modal>
        </div>
    );
};

export default CertificateView;
