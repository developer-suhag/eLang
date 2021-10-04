import { Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import OtherHero from "../OtherHero/OtherHero";

const About = () => {
  return (
    <div>
      {/* hero section  */}
      <OtherHero>ABOUT US</OtherHero>
      <Container sx={{ p: 6 }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography sx={{ my: 1, fontSize: 30 }} variant="h5" component="h3">
            OUR STORY
          </Typography>
          <Typography component="p" ariant="body2" color="text.secondary">
            It is a long established fact that a reader.
          </Typography>
        </Box>

        <Box sx={{ my: 4 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {
              <Grid item xs={2} sm={4} md={3}>
                <Paper sx={{ textAlign: "center", p: 4, bgcolor: "#feeafa" }}>
                  <Typography
                    sx={{ fontSize: 24, marginBottom: 2, color: "#e63946" }}
                    variant="h6"
                    component="h6"
                  >
                    5000
                  </Typography>
                  <Typography
                    sx={{ fontSize: 16 }}
                    ariant="body1"
                    color="text.secondary"
                    component="p"
                    variant="p"
                  >
                    FOREIGN FOLLOWERS
                  </Typography>
                </Paper>
              </Grid>
            }
            {
              <Grid item xs={2} sm={4} md={3}>
                <Paper sx={{ textAlign: "center", p: 4, bgcolor: "#feeafa" }}>
                  <Typography
                    sx={{ fontSize: 24, marginBottom: 2, color: "#e63946" }}
                    variant="h6"
                    component="h6"
                  >
                    60
                  </Typography>
                  <Typography
                    sx={{ fontSize: 16 }}
                    ariant="body2"
                    color="text.secondary"
                    component="p"
                    variant="p"
                  >
                    CERTIFIED TEACHERS
                  </Typography>
                </Paper>
              </Grid>
            }
            {
              <Grid item xs={2} sm={4} md={3}>
                <Paper sx={{ textAlign: "center", p: 4, bgcolor: "#feeafa" }}>
                  <Typography
                    sx={{ fontSize: 24, marginBottom: 2, color: "#e63946" }}
                    variant="h6"
                    component="h6"
                  >
                    2340
                  </Typography>
                  <Typography
                    sx={{ fontSize: 16 }}
                    ariant="body2"
                    color="text.secondary"
                    component="p"
                    variant="p"
                  >
                    STUDENTS ENROLLED
                  </Typography>
                </Paper>
              </Grid>
            }
            {
              <Grid item xs={2} sm={4} md={3}>
                <Paper sx={{ textAlign: "center", p: 4, bgcolor: "#feeafa" }}>
                  <Typography
                    sx={{ fontSize: 24, marginBottom: 2, color: "#e63946" }}
                    variant="h6"
                    component="h6"
                  >
                    12
                  </Typography>
                  <Typography
                    sx={{ fontSize: 16 }}
                    ariant="body2"
                    color="text.secondary"
                    component="p"
                    variant="p"
                  >
                    COMPLETE COURSES
                  </Typography>
                </Paper>
              </Grid>
            }
          </Grid>
        </Box>
      </Container>
      <Container sx={{ p: 6 }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography sx={{ my: 1, fontSize: 30 }} variant="h5" component="h3">
            MEET OUR TEAM
          </Typography>
        </Box>
        <Box></Box>
      </Container>
    </div>
  );
};

export default About;
