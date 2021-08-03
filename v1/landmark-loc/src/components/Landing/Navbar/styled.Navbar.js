import styled from "styled-components";
import {AppBar, Toolbar, IconButton, Avatar} from "@material-ui/core";

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
`;

export const Icon = styled(Avatar)``;

export const StyledIconButton = styled(IconButton)``;
