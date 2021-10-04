import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { useHistory } from "react-router";
import { CoursesContext } from "../../App";
import CallToAction from "../CallToAction/CallToAction";
import OtherHero from "../OtherHero/OtherHero";
import TeamMember from "../TeamMember/TeamMember";

const About = () => {
  // handleClick
  const history = useHistory();
  const handleClick = () => {
    history.push("/contact-us");
  };
  const courses = useContext(CoursesContext);
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
      {/* instructors  */}
      <Container maxWidth="100%" sx={{ p: 6, bgcolor: "#edf6f9" }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center" }}>
            <Typography
              sx={{ my: 1, fontSize: 30 }}
              variant="h5"
              component="h3"
            >
              MEET OUR INSTRUCTORS
            </Typography>
            <Box sx={{ width: "100%", my: 6 }}>
              <Grid
                container
                spacing={{ xs: 2, md: 4 }}
                columns={{ xs: 2, sm: 8, md: 12 }}
              >
                {courses.map((course) => (
                  <Grid item xs={2} sm={4} md={4}>
                    <TeamMember key={course.id} course={course}></TeamMember>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
          <Box></Box>
        </Container>
      </Container>
      {/* call to action  */}
      <CallToAction>
        {" "}
        <Button
          onClick={handleClick}
          className="contained-btn"
          variant="contained"
        >
          Contact Us
        </Button>
      </CallToAction>
    </div>
  );
};

export default About;
