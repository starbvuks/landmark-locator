// import packages
import React from "react";
// import styled components
import {
  ContainerStyled,
  BoxStyled,
  GridStyled,
  GridItem,
  FooterItem,
  FooterLogo,
  Img,
} from "./FooterStyles.js";

// grid based content
function Footer() {
  return (
    <BoxStyled bgcolor="#2f3b3e">
      <ContainerStyled maxWidth="lg">
        <GridStyled container spacing={5}>
          <GridItem item xs={12} sm={3}>
            <FooterItem>Contact</FooterItem>
            <FooterItem>Support</FooterItem>
            <FooterItem>Privacy</FooterItem>
          </GridItem>
          <GridItem item xs={12} sm={3}>
            <FooterItem>Account</FooterItem>
            <FooterItem>Register</FooterItem>
            <FooterItem>Privacy</FooterItem>
          </GridItem>
          <GridItem item xs={12} sm={3}>
            <FooterItem>Backup</FooterItem>
            <FooterItem>History</FooterItem>
            <FooterItem>Devtools</FooterItem>
          </GridItem>
          <GridItem item xs={12} sm={3}>
            <FooterLogo>
              <Img src="/img/ll-icon-white.png" alt="logo" width="120" />
            </FooterLogo>
          </GridItem>
        </GridStyled>
      </ContainerStyled>
    </BoxStyled>
  );
}

export default Footer;
