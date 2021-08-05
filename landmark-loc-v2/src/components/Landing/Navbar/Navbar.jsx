import React, {useState} from "react";
import {useHistory, Link, Redirect} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {authTrue, authFalse} from "../../../features/auth/authSlice.js";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FaceIcon from "@material-ui/icons/Face";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HomeIcon from "@material-ui/icons/Home";
import MapTwoToneIcon from "@material-ui/icons/MapTwoTone";
import ExploreIcon from "@material-ui/icons/Explore";

import {
  Avatar,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";

import {
  Icon,
  NavLogo,
  StyledAppBar,
  StyledToolbar,
  StyledIconButton,
  StyledIconButtonLogo,
} from "./styled.Navbar";

const Navbar = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState();
  const auth = useSelector((state) => state.auth.value);

  const userIconClickHandler = () => {
    if (auth === true) {
      history.push("/profile");
    } else {
      history.push("/login");
    }
  };

  const logoutHandler = () => {
    if (auth === true) {
      sessionStorage.removeItem("token");
      dispatch(authFalse());
      window.location.reload();
    } else {
      history.push("/login");
    }
  };

  const goBackHome = () => {
    history.push("/");
  };

  const goToMap = () => {
    history.push("/india-list");
  };

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
              <NavLogo>
                <Icon
                  src="./img/ll-icon-white.png"
                  alt="logo"
                  variant="square"
                />
              </NavLogo>
            </StyledIconButtonLogo>
          </Link>
          <StyledIconButton onClick={() => handleClick()} color="inherit">
            {auth === true ? (
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
            <Divider />
            <List style={{width: 200}}>
              {[
                {
                  text: "Home",
                  icon: <HomeIcon />,
                  action: goBackHome,
                },
                {
                  text: "Locations",
                  icon: <MapTwoToneIcon />,
                  action: goToMap,
                },
                {
                  text: "Near Me",
                  icon: <ExploreIcon />,
                  action: goBackHome,
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
