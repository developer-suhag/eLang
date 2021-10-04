import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { CoursesContext } from "../../App";
import Course from "../Course/Course";
import "./LatestCourses.css";

// latest course component
const LatestCourses = () => {
  const courses = useContext(CoursesContext);
  return (
    <Container maxWidth="100%" sx={{ py: 8, bgcolor: "#edf6f9" }}>
      <Container maxWidth="xl">
        <Typography
          sx={{ textAlign: "center", marginBottom: 8 }}
          variant="h3"
          component="h3"
        >
          {" "}
          Latest <span className="colored-text">Courses</span>
        </Typography>
        {/* course  */}
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 4, md: 12 }}
          >
            {courses.slice(0, 4).map((course) => (
              <Grid item xs={2} sm={4} md={3}>
                <Course key={course.id} course={course}></Course>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Container>
  );
};

export default LatestCourses;
