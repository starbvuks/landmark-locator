// import packages / grid elements
import styled from "styled-components";
import {Container, Grid, Box} from "@material-ui/core";

export const BoxStyled = styled(Box)`
  color: white;
  background-color: var(--main-dark);
  font-family: "Poppins";
  font-weight: 500;
`;

export const ContainerStyled = styled(Container)`
  text-align: center;
`;

export const GridStyled = styled(Grid)`
  align-items: center;
  display: flex;
`;

export const GridItem = styled(Grid)``;

export const FooterItem = styled(Box)`
  font-size: 16px;
  padding: 5px;
`;

export const FooterLogo = styled(Box)`
  margin: 0 0 5vh 0;
`;

export const Img = styled.img``;
