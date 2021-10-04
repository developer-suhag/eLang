import React from "react";

import Features from "../Features/Features";
import HeroSection from "../HeroSection/HeroSection";
import "./Home.css";

const Home = () => {
  return (
    <div>
      {/* hero section  */}
      <HeroSection></HeroSection>
      {/* features section  */}
      <Features></Features>
    </div>
  );
};

export default Home;
