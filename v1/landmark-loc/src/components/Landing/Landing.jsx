import React from "react";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";

const Landing = ({isAuth}) => {
  return (
    <div>
      <Navbar isAuth={isAuth} />
      <Home />
    </div>
  );
};

export default Landing;
