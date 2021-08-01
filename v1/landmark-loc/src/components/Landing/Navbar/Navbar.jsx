import React from "react";
import {Redirect} from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import {
  Icon,
  LogoDiv,
  StyledAppBar,
  StyledToolbar,
  StyledIconButton,
  StyledIconButtonLogo,
} from "./styled.Navbar";

const Navbar = ({token, setToken}) => {
  const userIconClickHandler = () => {
    console.log(token);
    if (!token) {
      console.log("login");
      return <Redirect to="/login" />;
    } else {
      console.log("profile");
      return <Redirect to="/profile" />;
    }
  };

  return (
    <div>
      <LogoDiv>
        <StyledIconButtonLogo
          disableRipple={true}
          style={{backgroundColor: "transparent"}}
        >
          <Icon src="./img/ll-icon.png" alt="logo" />
        </StyledIconButtonLogo>
      </LogoDiv>
      <StyledAppBar>
        <StyledToolbar>
          <StyledIconButton
            onClick={() => userIconClickHandler()}
            color="inherit"
          >
            <AccountCircleIcon style={{fill: "#F2F2F2"}} fontSize="large" />
          </StyledIconButton>
        </StyledToolbar>
      </StyledAppBar>
    </div>
  );
};

export default Navbar;
