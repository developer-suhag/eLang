import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useHistory } from "react-router";
import "./CallToAction.css";

const CallToAction = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/courses");
  };
  return (
    <Container
      sx={{ py: 8, my: 4, bgcolor: "#a8dadc", borderRadius: 2, boxShadow: 2 }}
      className="call-to-action"
    >
      <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <div>
          <Typography variant="h5" component="h4">
            NEW STUDENTS JOIN EVERY WEEK
          </Typography>
        </div>
        <div style={{ textAlign: "right" }}>
          <Button
            onClick={handleClick}
            variant="contained"
            className="contained-btn"
          >
            Enroll Now
          </Button>
        </div>
      </Box>
    </Container>
  );
};

export default CallToAction;
