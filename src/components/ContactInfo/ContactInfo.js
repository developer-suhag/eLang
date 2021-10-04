import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./ContactInfo.css";

const ContactInfo = () => {
  return (
    <Box className="contact-info">
      <Typography sx={{ my: 1 }} variant="h5">
        CONTACT INFO
      </Typography>
      <Typography
        ariant="body1"
        color="text.secondary"
        component="p"
        variant="p"
      >
        Welcome to our Website. We are glad to have you around.
      </Typography>
      {/* Contact Detials  */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          my: 3,
          py: 2,
          borderTop: "1px solid #ddd",
        }}
      >
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Box>
            <span>
              <PhoneIcon sx={{ fontSize: 40, color: "#ffb703" }} />
            </span>
          </Box>
          <Box>
            <Typography variant="h6" component="h6">
              Phone
            </Typography>
            <Typography
              ariant="body1"
              color="text.primary"
              component="p"
              variant="p"
            >
              +880 1791490304
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Box>
            <span>
              <EmailIcon sx={{ fontSize: 40, color: "#ffb703" }} />
            </span>
          </Box>
          <Box>
            <Typography variant="h6" component="h6">
              Email
            </Typography>
            <Typography
              ariant="body1"
              color="text.primary"
              component="p"
              variant="p"
            >
              developersuhag@gmail.com
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* contact details  */}

      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
          my: 3,
          py: 2,
          borderTop: "1px solid #ddd",
        }}
      >
        <Box>
          <span>
            <LocationOnIcon sx={{ fontSize: 40, color: "#ffb703" }} />
          </span>
        </Box>
        <Box>
          <Typography variant="h6" component="h6">
            Address
          </Typography>
          <Typography
            ariant="body1"
            color="text.primary"
            component="p"
            variant="p"
          >
            Sakhipur, Tangai, Dhaka, Bangladesh
          </Typography>
        </Box>
      </Box>
      {/* socails icons  */}
      <div className="social-icons">
        <a
          href="https://www.facebook.com/suhag.alamin.315/"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookIcon />
        </a>
        <a
          href="https://twitter.com/suhag_alamain"
          target="_blank"
          rel="noreferrer"
        >
          <TwitterIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/suhag-al-amin/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://github.com/developer-suhag"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </a>
      </div>
    </Box>
  );
};

export default ContactInfo;
