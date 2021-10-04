import { Container } from "@mui/material";
import React from "react";
import "./OtherHero.css";

// hero section component for other page except home
const OtherHero = (props) => {
  return (
    <section className="other-hero-section">
      <Container sx={{ p: 16 }}>
        <h3 className="hero-title animate__animated animate__slideInDown">
          {props.children}
        </h3>
      </Container>
    </section>
  );
};

export default OtherHero;
