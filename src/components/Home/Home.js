import { Button } from "@mui/material";
import React from "react";
import { useHistory } from "react-router";
import CallToAction from "../CallToAction/CallToAction";

import Features from "../Features/Features";
import HeroSection from "../HeroSection/HeroSection";
import LatestCourses from "../LatestCourses/LatestCourses";
import "./Home.css";

const Home = () => {
  // handleClick
  const history = useHistory();
  const handleClick = () => {
    history.push("/courses");
  };
  return (
    <div>
      {/* hero section  */}
      <HeroSection></HeroSection>
      {/* features section  */}
      <Features></Features>
      {/* latest courses  */}
      <LatestCourses></LatestCourses>
      {/* Call to action  */}
      <CallToAction>
        <Button
          onClick={handleClick}
          className="contained-btn"
          variant="contained"
        >
          Enroll Now
        </Button>
      </CallToAction>
    </div>
  );
};

export default Home;
