import React from "react";
import styled from "styled-components";

import {Typography} from "@material-ui/core";

const HomeSecond = () => {
  return (
    <Main>
      <CenterCard>
        <TravelDiv>
          <TravelIconDiv>
            <TravelIcon src="/img/travel-explore.png" alt="travel-icon" />
          </TravelIconDiv>
          <TravelTextDiv>
            <TravelText variant="h1">Find locations you love</TravelText>
            <TravelTextBottom variant="h1">
              In the places you love
            </TravelTextBottom>
          </TravelTextDiv>
        </TravelDiv>
        <WorldDiv>
          <WorldIconDiv>
            <WorldIcon src="/img/world-solid.png" alt="world-icon" />
          </WorldIconDiv>
          <WorldTextDiv>
            <WorldText variant="h1">Track the places you've been</WorldText>
            <WorldTextBottom variant="h1">
              And where you want to go
            </WorldTextBottom>
          </WorldTextDiv>
        </WorldDiv>
      </CenterCard>
      <Right></Right>
    </Main>
  );
};

export default HomeSecond;

const Main = styled.div`
  margin: 25vh 8vw 0 8vw;
  display: flex;
  flex-direction: row;
`;

const CenterCard = styled.div`
  display: flex;
  flex-direction: column;
`;

const Right = styled.div`
  height: 61vh;
  width: 40vw;
  margin: 0 0 0 2.5vw;
  border-radius: 25px;
  background-image: url("https://images.unsplash.com/photo-1496372412473-e8548ffd82bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1175&q=80");
  background-position: center;
  background-size: cover;
  box-shadow: var(--main-purple) 0px 10px 35px 0;
`;

// travel

const TravelDiv = styled.div`
  background-color: var(--main-tone);
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 55vw;
  height: 28vh;

  @media all and (max-width: 730px) {
    height: 18vh;
  }

  @media all and (min-width: 730px) and (max-width: 1064px) {
    height: 25vh;
  }
`;

const TravelIconDiv = styled.div`
  background-color: var(--main-red);
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25vw;
  box-shadow: var(--main-red) 10px 0 35px -12px;

  @media all and (max-width: 730px) {
    padding: 0 5vw;
  }
`;

const TravelIcon = styled.img`
  border-radius: 50%;
  background-color: var(--main-tone);
  padding: 10px;
  width: 7vw;
  height: 7vw;
`;

const TravelTextDiv = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  padding: 0 0 0 4vw;
  color: var(--main-red);
`;

const TravelText = styled(Typography)`
  font-family: "Red Hat Display" !important;
  font-size: 2.5vw !important;
  font-weight: 700 !important;
`;

const TravelTextBottom = styled(Typography)`
  font-family: "Red Hat Display" !important;
  font-size: 2.5vw !important;
  font-weight: 700 !important;
`;

// World Section

const WorldDiv = styled.div`
  background-color: var(--main-tone);
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 5vh 0;
  width: 55vw;
  height: 28vh;

  @media all and (max-width: 730px) {
    height: 18vh;
  }

  @media all and (min-width: 730px) and (max-width: 1064px) {
    height: 25vh;
  }
`;

const WorldIconDiv = styled.div`
  background-color: var(--main-red);
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25vw;
  box-shadow: var(--main-red) 10px 0 35px -12px;

  @media all and (max-width: 730px) {
    padding: 0 5vw;
  }
`;

const WorldIcon = styled.img`
  border-radius: 50%;
  background-color: var(--main-tone);
  padding: 10px;
  width: 7vw;
  height: 7vw;
`;

const WorldTextDiv = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  padding: 0 0 0 4vw;
  color: var(--main-red);
`;

const WorldText = styled(Typography)`
  font-family: "Red Hat Display" !important;
  font-size: 2.5vw !important;
  font-weight: 700 !important;
`;

const WorldTextBottom = styled(Typography)`
  font-family: "Red Hat Display" !important;
  font-size: 2.5vw !important;
  font-weight: 700 !important;
`;
