import React from "react";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import {
  Icon,
  LogoDiv,
  StyledAppBar,
  StyledToolbar,
  StyledIconButton,
  StyledIconButtonLogo,
} from "./styled.Navbar";

const Navbar = () => {
  return (
    <div>
      <LogoDiv>
        <StyledIconButtonLogo
          disableRipple="true"
          style={{backgroundColor: "transparent"}}
        >
          <Icon src="./img/ll-icon.png" alt="logo" />
        </StyledIconButtonLogo>
      </LogoDiv>
      <StyledAppBar>
        <StyledToolbar>
          <StyledIconButton color="inherit">
            <AccountCircleIcon style={{fill: "#F2F2F2"}} />
          </StyledIconButton>
        </StyledToolbar>
      </StyledAppBar>
    </div>
  );
};

export default Navbar;
