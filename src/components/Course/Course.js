import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import PeopleIcon from "@mui/icons-material/People";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./Course.css";

const Course = (props) => {
  const {
    title,
    instructorName,
    instructorImg,
    price,
    enrolled,
    comment,
    courseThumb,
    rating,
  } = props.course;
  return (
    <Card sx={{ maxWidth: 345, minHeight: 460, boxShadow: 2 }}>
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
            {title}
          </Typography>
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
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
};

export default Course;
