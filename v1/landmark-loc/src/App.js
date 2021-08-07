import React from "react";
//import "./styles.css";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import { Route, BrowserRouter, Switch, Link } from "react-router-dom";
//import Books from "./Books";
import Favorites from "./Favorites";

export default function App() {
  const routes = ["/favorites"];
  return (
    <div className="App">
      <BrowserRouter>
        <Route
          path="/"
          render={(history) => (
            <AppBar>
              <Tabs
                value={
                  history.location.pathname !== "/"
                    ? history.location.pathname
                    : false
                }
              >
                {console.log(history.location.pathname)}

                <Tab
                  value={routes[0]}
                  label="Favorites"
                  component={Link}
                  to={routes[0]}
                />
              </Tabs>
            </AppBar>
          )}
        />

        <Switch>

          <Route path="/favorites" component={Favorites} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
