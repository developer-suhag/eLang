import React from "react";

import Features from "../Features/Features";
import HeroSection from "../HeroSection/HeroSection";
import LatestCourses from "../LatestCourses/LatestCourses";
import "./Home.css";

const Home = () => {
  return (
    <div>
      {/* hero section  */}
      <HeroSection></HeroSection>
      {/* features section  */}
      <Features></Features>
      {/* latest courses  */}
      <LatestCourses></LatestCourses>
    </div>
  );
};

export default Home;
