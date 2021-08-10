import "./App.css";
import {useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import {authTrue, authFalse} from "./redux/features/auth/authSlice.js";
import {useDispatch, useSelector} from "react-redux";

import Navbar from "./components/Landing/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import Map from "./components/Map/Map";
import Listings from "./components/Listings/StateListing";
import LandmarkList from "./components/Listings/LandmarkList";
import Login from "./components/Users/Login";
import SignUp from "./components/Users/SignUp";
import Profile from "./components/Profile/Profile";
import LandmarkPage from "./components/Landmark/LandmarkPage";

function App() {
  const auth = useSelector((state) => state.auth.value);
  const token = getToken();
  const dispatch = useDispatch();

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
      dispatch(authTrue());
    } else {
      dispatch(authFalse());
    }
  }, []);

  return (
    <div className="App">
      <Router>
        {auth === false && <Redirect to="/login" />}
        <Switch>
          <Route path="/map">
            <Navbar />
            <Map />
          </Route>
          <Route path="/india-list">
            <Navbar />
            <Listings />
          </Route>
          <Route
            path="/locat-list/:state"
            render={(matchProps) => <LandmarkList {...matchProps} />}
          ></Route>
          <Route
            path="/landmark/:id"
            render={(matchProps) => <LandmarkPage {...matchProps} />}
          ></Route>
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
