import React, {useState} from "react";
import {useHistory, Link, Redirect} from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import {Menu, MenuItem, Drawer} from "@material-ui/core";

import {
  Icon,
  StyledAppBar,
  StyledToolbar,
  StyledIconButton,
  StyledIconButtonLogo,
} from "./styled.Navbar";

const Navbar = ({isAuth}) => {
  const history = useHistory();

  const userIconClickHandler = () => {
    if (isAuth === true) {
      history.push("/profile");
    } else {
      history.push("/login");
    }
  };

  const logoutHandler = () => {
    if (isAuth === true) {
      sessionStorage.removeItem("token");
      window.location.reload();
    } else {
      history.push("/login");
    }
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <StyledAppBar>
        <StyledToolbar variant="dense">
          <Link to="/">
            <StyledIconButtonLogo
              disableRipple={true}
              style={{backgroundColor: "transparent"}}
            >
              <Icon src="./img/ll-icon-white.png" alt="logo" variant="square" />
            </StyledIconButtonLogo>
          </Link>
          <StyledIconButton onClick={() => handleClick()} color="inherit">
            <AccountCircleIcon style={{fill: "#F2F2F2"}} fontSize="large" />
          </StyledIconButton>
          <Drawer anchor="right" open={anchorEl} onClose={handleClose}>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
          </Drawer>
          {/* <Menu
            getContentAnchorEl={null}
            anchorEl={anchorEl}
            anchorOrigin={{vertical: "top", horizontal: "right"}}
            transformOrigin={{vertical: "top", horizontal: "right"}}
            style={{}}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={userIconClickHandler}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Settings</MenuItem>
            <MenuItem onClick={logoutHandler}>Logout</MenuItem>
          </Menu> */}
        </StyledToolbar>
      </StyledAppBar>
    </div>
  );
};

export default Navbar;
