import { Button, Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { useHistory } from "react-router";
import { CoursesContext } from "../../App";
import CallToAction from "../CallToAction/CallToAction";
import Course from "../Course/Course";
import OtherHero from "../OtherHero/OtherHero";
import "./Services.css";

// services page
const Services = () => {
  // get courses by context api
  const courses = useContext(CoursesContext);
  // handleClick
  const history = useHistory();
  const handleClick = () => {
    history.push("/contact-us");
  };
  return (
    <div>
      {/* hero section  */}
      <OtherHero>ALL COURSES</OtherHero>
      {/* course  */}
      <Container sx={{ p: 8 }}>
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            spacing={{ xs: 2, md: 2, lg: 4 }}
            columns={{ xs: 2, sm: 4, md: 12, lg: 12 }}
          >
            {courses.map((course) => (
              <Grid item xs={2} sm={4} md={4} lg={4}>
                <Course key={course.id} course={course}></Course>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      {/* call to action  */}
      <CallToAction>
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

export default Services;
