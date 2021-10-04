import { Container } from "@mui/material";
import React from "react";
import thankYou from "../../images/giphy.gif";

const PlacedOrder = () => {
  return (
    <Container sx={{ p: 4, textAlign: "center", marginBottom: 8 }}>
      <img src={thankYou} alt="" />
    </Container>
  );
};

export default PlacedOrder;
