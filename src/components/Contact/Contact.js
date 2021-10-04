import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactInfo from "../ContactInfo/ContactInfo";
import OtherHero from "../OtherHero/OtherHero";

const Contact = () => {
  return (
    <div>
      {/* hero section  */}
      <OtherHero>CONTACT</OtherHero>
      {/* contact section  */}
      <Container sx={{ p: 8 }}>
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            spacing={{ xs: 2, md: 8 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
          >
            {/* contact info  */}
            {
              <Grid item xs={2} sm={4} md={6}>
                <ContactInfo></ContactInfo>
              </Grid>
            }
            {/* contact form  */}
            {
              <Grid item xs={2} sm={4} md={6}>
                <ContactForm></ContactForm>
              </Grid>
            }
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Contact;
