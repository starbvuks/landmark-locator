import React from "react";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import {
  Icon,
  StyledAppBar,
  StyledToolbar,
  StyledIconButton,
  StyledIconButtonLogo,
} from "./styled.Navbar";
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <StyledIconButtonLogo>
        <Icon src="./img/ll-icon.png" alt="logo" />
      </StyledIconButtonLogo>
      <StyledAppBar>
        <StyledToolbar>
          <Link to="/signin">
          <StyledIconButton color="inherit">
            <AccountCircleIcon style={{fill: "#F2F2F2"}} />
          </StyledIconButton>
          </Link>
        </StyledToolbar>
      </StyledAppBar>
    </div>
  );
};

export default Navbar;
