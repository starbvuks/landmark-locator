import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
//import styled from "styled-components";

import Navbar from "./components/Landing/Navbar/Navbar";
import Home from "./components/Landing/Home/Home";
import Map from "./components/Map/Map";
import Login from "./components/Users/Login";
import SignUp from "./components/Users/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/map">
            <Map />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
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
