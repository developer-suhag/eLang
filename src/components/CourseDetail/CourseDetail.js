import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Rating,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { useParams } from "react-router";
import { CoursesContext } from "../../App";
import OtherHero from "../OtherHero/OtherHero";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import PeopleIcon from "@mui/icons-material/People";
import "./CourseDetails.css";

// course detail component

const CourseDetail = () => {
  const { courseId } = useParams();
  parseInt(courseId);
  const courses = useContext(CoursesContext);
  const newCourse = [];
  for (const course of courses) {
    if (course.id == courseId) {
      newCourse.push(course);
    }
  }

  return (
    <div>
      <OtherHero>Course Details</OtherHero>
      <Container
        maxWidth="sm"
        sx={{
          bgcolor: "#f1faee",
          display: "flex",
          justifyContent: "center",
          p: 3,
          borderRadius: 3,
          boxShadow: 3,
          my: 8,
        }}
      >
        <Card sx={{ maxWidth: 700 }}>
          <CardActionArea>
            <CardMedia
              className="course-thumb"
              component="img"
              height="400"
              image={newCourse[0]?.courseThumb}
            />
            <CardContent
              className="course-details"
              sx={{ textAlign: "center" }}
            >
              <img
                className="instructor-img details-instructor-img"
                src={newCourse[0]?.instructorImg}
                alt=""
              />
              <Typography
                sx={{ marginTop: 4 }}
                gutterBottom
                variant="span"
                component="p"
              >
                {newCourse[0]?.instructorName}
              </Typography>
              <Typography
                sx={{ my: 2 }}
                variant="h6"
                component="h3"
                color="text.primary"
              >
                {newCourse[0]?.title}
              </Typography>
              <div>
                <Rating precision={0.5} value={newCourse[0]?.rating} readOnly />
              </div>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  borderTop: "1px solid #ddd",
                  py: 1,
                  marginTop: 2,
                }}
              >
                <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                  <div>
                    <PeopleIcon
                      sx={{ marginRight: 1 }}
                      className="course-icon"
                    />
                    <span className="icon-text">{newCourse[0]?.enrolled}</span>
                  </div>
                  <div>
                    <ChatBubbleIcon
                      sx={{ marginRight: 1 }}
                      className="course-icon"
                    />
                    <span className="icon-text">{newCourse[0]?.comment}</span>
                  </div>
                </Box>
                <Typography className="price" variant="p" component="p">
                  ${newCourse[0]?.price}
                </Typography>
              </Box>
            </CardContent>
          </CardActionArea>
          <CardActions sx={{ display: "block", textAlign: "center", py: 2 }}>
            <Button
              size="smalllarge"
              variant="contained"
              color="secondary"
              className="contained-btn"
              sx={{ px: 4 }}
            >
              Add to Cart
            </Button>
          </CardActions>
        </Card>
      </Container>
    </div>
  );
};

export default CourseDetail;
