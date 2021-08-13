import React from "react";
import {useSelector} from "react-redux";
import {Redirect} from "react-router-dom";

import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Landing = () => {
  const auth = useSelector((state) => state.auth.value);

  if (auth === false) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default Landing;
