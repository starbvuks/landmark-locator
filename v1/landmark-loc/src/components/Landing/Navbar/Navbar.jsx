import React from "react";
import {Link} from "react-router-dom";
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
          disableRipple={true}
          style={{backgroundColor: "transparent"}}
        >
          <Icon src="./img/ll-icon.png" alt="logo" />
        </StyledIconButtonLogo>
      </LogoDiv>
      <StyledAppBar>
        <StyledToolbar>
          <Link to="signup">
            <StyledIconButton color="inherit">
              <AccountCircleIcon style={{fill: "#F2F2F2"}} fontSize="large" />
            </StyledIconButton>
          </Link>
        </StyledToolbar>
      </StyledAppBar>
    </div>
  );
};

export default Navbar;
