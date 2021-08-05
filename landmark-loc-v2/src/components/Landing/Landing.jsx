import React from "react";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";

import {Redirect} from "react-router-dom";
import {useSelector} from "react-redux";

const Landing = ({isAuth}) => {
  const auth = useSelector((state) => state.auth.value);

  if (auth === false) {
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
