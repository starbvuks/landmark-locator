import "./App.css";
import {useState, useEffect} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {authTrue, authFalse} from "./features/auth/authSlice.js";
import {useDispatch} from "react-redux";
//import styled from "styled-components";

import Navbar from "./components/Landing/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import Map from "./components/Map/Map";
import Listings from "./components/Listings/Listings";
import Login from "./components/Users/Login";
import SignUp from "./components/Users/SignUp";
import Profile from "./components/Profile/Profile";

function App() {
  const token = getToken();
  const dispatch = useDispatch();

  function setToken(userToken) {
    sessionStorage.setItem("token", JSON.stringify(userToken));
  }

  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);

  function getToken() {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  }

  useEffect(() => {
    getToken();
    if (token) {
      dispatch(authTrue());
    } else {
      dispatch(authFalse());
    }
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/map">
            <Navbar />
            <Map />
          </Route>
          <Route path="/india-list">
            <Navbar />
            <Listings />
          </Route>
          <Route path="/signup">
            <SignUp setToken={setToken} />
          </Route>
          <Route path="/login">
            <Login setToken={setToken} />
          </Route>
          <Route exact path="/profile">
            <Navbar />
            <Profile setToken={setToken} token={token} />
          </Route>
          <Route exact path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
