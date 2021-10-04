import { Box } from "@mui/system";
import React from "react";
import "./TeamMember.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Typography } from "@mui/material";

// team member component
const TeamMember = (props) => {
  const { instructorName, instructorImg } = props.course;
  return (
    <div>
      <Box
        sx={{
          minWidth: 300,
          bgcolor: "#fff",
          px: 2,
          py: 4,
          borderRadius: 2,
          boxShadow: 4,
        }}
        className="instructor-item"
      >
        <div className="instructor">
          <img src={instructorImg} alt={instructorName} />
        </div>
        <Box sx={{ my: 1 }} className="social-icons">
          <a
            href="https://twitter.com/suhag_alamain"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon />
          </a>
          <a
            href="https://github.com/developer-suhag"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
        </Box>
        <Typography sx={{ color: "#457b9d" }} variant="h5" component="h4">
          {instructorName}
        </Typography>
      </Box>
    </div>
  );
};

export default TeamMember;
