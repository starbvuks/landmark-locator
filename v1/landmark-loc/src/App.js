import "./App.css";
import {useState, useEffect} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
//import styled from "styled-components";

import Navbar from "./components/Landing/Navbar/Navbar";
import Home from "./components/Landing/Home/Home";
import Map from "./components/Map/Map";
import Login from "./components/Users/Login";
import SignUp from "./components/Users/SignUp";
import Profile from "./components/Profile/Profile";

function App() {
  const [isAuth, setAuth] = useState();
  const token = getToken();

  function setToken(userToken) {
    sessionStorage.setItem("token", JSON.stringify(userToken));
  }

  function getToken() {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  }

  useEffect(() => {
    getToken();
    if (token) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/map">
            <Map />
          </Route>
          <Route path="/signup">
            <SignUp setToken={setToken} />
          </Route>
          <Route path="/login">
            <Login setToken={setToken} isAuth={isAuth} />
          </Route>
          <Route path="/profile">
            <Profile setToken={setToken} token={token} />
          </Route>
          <Route path="/">
            <Navbar isAuth={isAuth} />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
