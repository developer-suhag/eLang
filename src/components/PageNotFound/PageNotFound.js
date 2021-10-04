import { Button, Container } from "@mui/material";
import React from "react";
import { useHistory } from "react-router";
import errorImg from "../../images/404 Error.gif";

// page not found page

const PageNotFound = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/home");
  };
  return (
    <Container sx={{ textAlign: "center" }}>
      <img src={errorImg} alt="" />
      <div>
        <Button
          onClick={handleClick}
          className="contained-btn"
          variant="contained"
        >
          Go Back to Home
        </Button>
      </div>
    </Container>
  );
};

export default PageNotFound;
