import React from "react";
import styled from "styled-components";

import Navbar from "../Landing/Navbar/Navbar";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

import {
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";

const Features = () => {
  const listData = [
    "Functional user login / sign-up / logout",
    "Database of states in India contains atleast one entry per state",
    "Landmark details, location and reviews are open",
    "Users can leave ratings and reviews for locations in their respective page",
    "Map location integration (integrated using MapBox)",
  ];

  return (
    <Main>
      <Navbar />
      <Content>
        <FirstLine>
          <Header>Features</Header>
          <PlaylistAddCheckIcon
            style={{fill: "var(--main-red)", fontSize: "6vw", marginTop: "2vh"}}
          />
        </FirstLine>
        <Build>build 1 (13/08/21)</Build>
        <ListStyled>
          <ListHeader>Working</ListHeader>
          {listData.map((data, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <FiberManualRecordIconStyled />
              </ListItemIcon>
              <ListItemText primary={<ListText>{data}</ListText>} />
            </ListItem>
          ))}
        </ListStyled>
      </Content>
    </Main>
  );
};

export default Features;

const Main = styled.div`
  height: 100vh;
  background-image: url("/img/featuresbg.jpg");
  background-position: center;
  background-size: cover;
  background-color: var(--main-light1);
`;

const Content = styled.div`
  display: flex;
  margin: 0 auto;
  width: 90%;
  justify-content: start;
  flex-direction: column;
`;

const FirstLine = styled.div`
  margin: 9vh 0 0 0;
  justify-content: space-between;
  width: 40%;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const Header = styled.span`
  font-family: Poppins;
  font-size: 6vw;
  font-weight: 800;
  color: var(--main-red);
`;

const Build = styled.span`
  margin: -2vh 0 0 0;
  font-family: Poppins;
  font-size: 2vw;
  font-weight: 500;
  color: var(--main-orange);
`;

const ListStyled = styled(List)`
  margin: 5vh 0 0 -1vw !important;
  border-radius: 10px;
`;

const ListHeader = styled(ListSubheader)`
  font-family: Poppins !important;
  font-size: 2.5vw !important;
  font-weight: 600 !important;
  color: var(--main-dark) !important;
  margin: 1vh 0;
`;

const ListText = styled.span`
  font-family: Poppins;
  font-size: 1.4vw;
  font-weight: 600;
  color: var(--main-dark);
  line-height: 1vh;
`;

const FiberManualRecordIconStyled = styled(FiberManualRecordIcon)`
  fill: var(--main-dark) !important;
  font-size: medium !important;
`;
