import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./ContactFrom.css";

const ContactForm = () => {
  return (
    <Box sx={{}}>
      <Typography sx={{ my: 1 }} variant="h5">
        SEND A MESSAGE
      </Typography>
      <Typography
        ariant="body1"
        color="text.secondary"
        component="p"
        variant="p"
      >
        Your email address will not be published.
      </Typography>
      <Box sx={{ my: 3 }}>
        <form>
          <TextField
            required
            type="text"
            sx={{ mr: 4 }}
            color="secondary"
            label="Name"
            variant="standard"
          />
          <TextField
            required
            type="email"
            label="Email"
            color="secondary"
            variant="standard"
          />
          <TextField
            required
            type="text"
            sx={{ my: 2 }}
            fullWidth
            label="Subject"
            color="secondary"
            variant="standard"
          />
          <TextField
            required
            type="text"
            sx={{ my: 2 }}
            fullWidth
            label="Message"
            color="secondary"
            variant="standard"
          />
          <Button
            sx={{ px: 6 }}
            className="contained-btn"
            size="large"
            variant="contained"
          >
            Send
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default ContactForm;
