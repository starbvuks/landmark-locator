import React from "react";
import {AppBar, Toolbar, IconButton} from "@material-ui/core";

import MapIcon from "@material-ui/icons/Map";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import {StyledAppBar, StyledToolbar} from "./styled.Navbar";

const Navbar = () => {
  return (
    <div>
      <StyledAppBar>
        <StyledToolbar>
          <IconButton color="inherit">
            <MapIcon style={{fill: "#F2F2F2"}} />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircleIcon style={{fill: "#F2F2F2"}} />
          </IconButton>
        </StyledToolbar>
      </StyledAppBar>
    </div>
  );
};

export default Navbar;
