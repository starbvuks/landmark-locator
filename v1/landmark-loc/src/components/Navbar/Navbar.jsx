import React from "react";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import {
  Icon,
  StyledAppBar,
  StyledToolbar,
  StyledIconButton,
  StyledIconButtonLogo,
} from "./styled.Navbar";

const Navbar = () => {
  return (
    <div>
      <StyledIconButtonLogo>
        <Icon src="./img/ll-icon.png" alt="logo" />
      </StyledIconButtonLogo>
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
