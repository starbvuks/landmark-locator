import styled from "styled-components";
import {AppBar, Toolbar, IconButton, Avatar, Button} from "@material-ui/core";

export const StyledAppBar = styled(AppBar)`
  background-color: #a6566b !important;
  height: 54px !important;
  box-shadow: none !important;
`;

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

export const StyledIconButtonLogo = styled(IconButton)``;

export const NavLogo = styled.div`
  height: 54px;
  width: 8vw;
  display: flex;
  margin-left: -35px;
  justify-content: center;
  background-color: var(--main-orange);

  @media all and (max-width: 730px) {
    width: 15vw;
    padding: 0 25px 0 25px;
    margin-left: -36px;
  }
`;

export const RightNav = styled.div`
  display: flex;
  align-items: center;
`;

export const NavButtons = styled.div`
  font-family: Poppins !important;
`;

export const AboutBtn = styled(Button)`
  font-family: Poppins !important;
  font-weight: 600;
  color: var(--main-light1);
  text-transform: none !important;
  margin: 0 4vw;
`;

export const FeaturesBtn = styled(Button)`
  font-family: Poppins !important;
  font-weight: 600;
  color: var(--main-light1);
  text-transform: none !important;
  margin: 0 4vw;
`;

export const Icon = styled(Avatar)``;

export const StyledIconButton = styled(IconButton)``;
