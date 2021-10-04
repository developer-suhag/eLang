import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./CallToAction.css";

// call to action component
const CallToAction = (props) => {
  return (
    <Container
      sx={{ py: 8, my: 4, bgcolor: "#a8dadc", borderRadius: 2, boxShadow: 2 }}
      className="call-to-action"
    >
      <Box
        sx={{
          display: "grid",
          alignItems: "center",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        <div>
          <Typography variant="h5" component="h4">
            NEW STUDENTS JOIN EVERY WEEK
          </Typography>
        </div>
        <div style={{ textAlign: "right" }}>{props.children}</div>
      </Box>
    </Container>
  );
};

export default CallToAction;
