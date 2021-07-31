import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
//import styled from "styled-components"

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Map from "./components/Map/Map";
import SignIn from "./components/SignIn/SignIn"
import SignUp from "./components/SignUp/SignUp"

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
          <Route path="/signin">
            <SignIn />
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
