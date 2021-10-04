import { Button, Card, Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useHistory } from "react-router";
import "./HeroSection.css";

// hero section component
const HeroSection = () => {
  // handleClick
  const history = useHistory();
  const handleClick = () => {
    history.push("/courses");
  };
  const handle2ndClick = () => {
    history.push("/contact-us");
  };
  return (
    <section className="hero-section">
      <Container sx={{ p: 8, paddingBottom: 0 }}>
        <h3 className="hero-title animate__animated animate__slideInDown">
          Learn languages and contect with the world
        </h3>
        <Button
          onClick={handleClick}
          sx={{ marginTop: 8, marginLeft: 4 }}
          className="outlined-btn animate__animated animate__backInLeft"
          variant="outlined"
        >
          Start Course
        </Button>
        <Button
          onClick={handle2ndClick}
          sx={{ marginTop: 8, marginLeft: 4 }}
          className="contained-btn animate__animated animate__backInRight animate__delay-1s"
          variant="contained "
        >
          Contact Us
        </Button>
        <Box sx={{ flexGrow: 1, marginTop: 12 }}>
          <Grid
            container
            spacing={{ xs: 0, md: 0 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            className="animate__animated animate__slideInUp"
          >
            {
              <Grid item xs={2} sm={4} md={4}>
                <Card
                  sx={{
                    height: 200,
                    bgcolor: "#febf28",
                    display: "flex",
                    gap: 0,
                    borderRadius: 0,
                    alignItems: "center",
                    p: 6,
                  }}
                >
                  <h3 className="number">10</h3>

                  <h3 className="number-text">GLOBAL LOCATIONS</h3>
                </Card>
              </Grid>
            }
            {
              <Grid item xs={2} sm={4} md={4}>
                <Card
                  sx={{
                    height: 200,
                    bgcolor: "#ffb605",
                    display: "flex",
                    gap: 0,
                    borderRadius: 0,
                    alignItems: "center",
                    p: 6,
                  }}
                >
                  <h3 className="number">94</h3>

                  <h3 className="number-text">PROGRAMS & COURSES</h3>
                </Card>
              </Grid>
            }
            {
              <Grid item xs={2} sm={4} md={4}>
                <Card
                  sx={{
                    height: 200,
                    bgcolor: "#f0aa03",
                    display: "flex",
                    gap: 0,
                    borderRadius: 0,

                    alignItems: "center",
                    p: 6,
                  }}
                >
                  <h3 className="number">14</h3>

                  <h3 className="number-text">YEARS OF EXPERIENCE</h3>
                </Card>
              </Grid>
            }
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default HeroSection;
