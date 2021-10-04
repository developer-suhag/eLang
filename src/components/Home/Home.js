import React from "react";
import CallToAction from "../CallToAction/CallToAction";

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
      {/* Call to action  */}
      <CallToAction></CallToAction>
    </div>
  );
};

export default Home;
