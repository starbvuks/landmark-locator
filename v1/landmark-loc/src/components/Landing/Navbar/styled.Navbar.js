import styled from "styled-components";
import {AppBar, Toolbar, IconButton} from "@material-ui/core";

export const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  margin: -5px 0 0 0;
`;

export const StyledIconButtonLogo = styled(IconButton)`
  width: 10vw;
  height: 64px;
`;

export const Icon = styled.img`
  width: 60%;
`;

export const StyledAppBar = styled(AppBar)`
  background-color: #a6566b !important;
  width: 90vw !important;
  box-shadow: none !important;
`;

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: flex-end;
`;

export const StyledIconButton = styled(IconButton)``;
