import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Container, Grid } from "@mui/material";
import React from "react";
import "./Footer.css";

// footer component
const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Grid
          sx={{ py: 2 }}
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={6}>
            <p>
              &copy; 2021 || Designed & Developed by{" "}
              <a
                className="colored-text"
                href="https://github.com/developer-suhag"
              >
                Suhag
              </a>
            </p>
          </Grid>
          <Grid
            sx={{ textAlign: "right" }}
            className="social-icons"
            item
            xs={6}
          >
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
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
