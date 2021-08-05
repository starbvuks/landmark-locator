import React from "react";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";

import {Redirect} from "react-router-dom";

const Landing = ({isAuth}) => {
  if (isAuth === false) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <Navbar isAuth={isAuth} />
      <Home />
    </div>
  );
};

export default Landing;
