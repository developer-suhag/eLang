import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import PeopleIcon from "@mui/icons-material/People";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import "./Course.css";

const Course = (props) => {
  const history = useHistory();
  const {
    id,
    title,
    instructorName,
    instructorImg,
    price,
    enrolled,
    comment,
    courseThumb,
    rating,
  } = props.course;

  //   handleClick

  const handleClick = () => {
    history.push(`/course/${id}`);
  };
  const handleCartClick = () => {
    history.push(`/courses`);
  };

  return (
    <Card
      sx={{ minWidth: 345, maxWidth: 500, minHeight: 465, boxShadow: 2 }}
      className="animate__animated animate__slideInUp animate__delay-1s"
    >
      <CardActionArea>
        <CardMedia
          className="course-thumb"
          component="img"
          height="200"
          image={courseThumb}
          alt={title}
        />
        <CardContent sx={{ textAlign: "center" }}>
          <img
            className="instructor-img"
            src={instructorImg}
            alt={instructorName}
          />
          <Typography sx={{ my: 2 }} gutterBottom variant="span" component="p">
            {instructorName}
          </Typography>
          <Typography
            sx={{ my: 2 }}
            variant="h6"
            component="h3"
            color="text.primary"
          >
            {title.slice(0, 20)}...
          </Typography>
          <div>
            <Rating precision={0.5} value={rating} readOnly />
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
                <PeopleIcon sx={{ marginRight: 1 }} className="course-icon" />
                <span className="icon-text">{enrolled}</span>
              </div>
              <div>
                <ChatBubbleIcon
                  sx={{ marginRight: 1 }}
                  className="course-icon"
                />
                <span className="icon-text">{comment}</span>
              </div>
            </Box>
            <Typography className="price" variant="p" component="p">
              ${price}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: "block", textAlign: "center", py: 2 }}>
        <Button
          onClick={handleClick}
          size="smalllarge"
          variant="outlined"
          color="secondary"
          sx={{ color: "#1d3557", px: 4 }}
        >
          View More
        </Button>
        <Button
          onClick={handleCartClick}
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
  );
};

export default Course;
