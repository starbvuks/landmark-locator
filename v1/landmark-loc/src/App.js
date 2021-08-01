import "./App.css";
import {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
//import styled from "styled-components";

import Navbar from "./components/Landing/Navbar/Navbar";
import Home from "./components/Landing/Home/Home";
import Map from "./components/Map/Map";
import Login from "./components/Users/Login";
import SignUp from "./components/Users/SignUp";

function setToken(userToken) {
  sessionStorage.setItem("token", JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
}

const loginRedirect = () => {
  if (!getToken()) {
    return <Login setToken={setToken} />;
  } else {
    return <Redirect to="/" />;
  }
};

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  // const token = getToken();
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/map">
            <Map />
          </Route>
          <Route path="/signup">
            <SignUp setToken={setToken} setLoggedIn={setLoggedIn} />
          </Route>
          <Route path="/login">
            <Login setToken={setToken} setLoggedIn={setLoggedIn} />
          </Route>
          <Route path="/">
            <Navbar />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
