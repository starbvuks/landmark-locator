import React from "react";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";

const Landing = ({isAuth}) => {
  return (
    <div>
      <Home />
      <Navbar isAuth={isAuth} />
    </div>
  );
};

export default Landing;
