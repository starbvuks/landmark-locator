import React, {useState} from "react";
import {useHistory, Link, Redirect} from "react-router-dom";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FaceIcon from "@material-ui/icons/Face";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import {
  Menu,
  MenuItem,
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";

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
            {isAuth === true ? (
              <Avatar
                style={{
                  border: "3px solid",
                  borderColor: "var(--main-light)",
                  width: "32px",
                  height: "32px",
                }}
                src="/img/avatar_03.png"
              />
            ) : (
              <AccountCircleIcon style={{fill: "#F2F2F2"}} fontSize="large" />
            )}
          </StyledIconButton>
          <Drawer anchor="right" open={anchorEl} onClose={handleClose}>
            <List style={{width: 200}}>
              {[
                {
                  text: "Profile",
                  icon: <FaceIcon />,
                  action: userIconClickHandler,
                },
                {
                  text: "Settings",
                  icon: <SettingsIcon />,
                  action: userIconClickHandler,
                },
                {
                  text: "Logout",
                  icon: <ExitToAppIcon />,
                  action: logoutHandler,
                },
              ].map((array, index) => (
                <ListItem button key={index} onClick={() => array.action()}>
                  <ListItemIcon>{array.icon}</ListItemIcon>
                  <ListItemText primary={array.text} />
                </ListItem>
              ))}
            </List>
          </Drawer>
        </StyledToolbar>
      </StyledAppBar>
    </div>
  );
};

export default Navbar;
