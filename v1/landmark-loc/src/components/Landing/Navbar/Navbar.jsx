import React from "react";
import {useHistory} from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import {
  Icon,
  LogoDiv,
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
