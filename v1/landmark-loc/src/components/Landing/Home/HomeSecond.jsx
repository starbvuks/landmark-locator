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
            <WorldText variant="h1">
              Keep track of the places you've been
            </WorldText>
            <WorldTextBottom variant="h1">
              And the the places you want to go
            </WorldTextBottom>
          </WorldTextDiv>
        </WorldDiv>
      </CenterCard>
    </Main>
  );
};

export default HomeSecond;

const Main = styled.div`
  margin-top: 15vh;
`;

const CenterCard = styled.div`
  display: flex;
  flex-direction: column;
`;

// travel

const TravelDiv = styled.div`
  background-color: var(--main-tone);
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 10vw 0 10vw;
  height: 35vh;
`;

const TravelIconDiv = styled.div`
  background-color: var(--main-red);
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25vw;
`;

const TravelIcon = styled.img`
  border-radius: 50%;
  background-color: var(--main-tone);
  padding: 10px;
  width: 10vw;
  height: 10vw;
`;

const TravelTextDiv = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  padding: 0 0 0 5vw;
  color: var(--main-red);
`;

const TravelText = styled(Typography)`
  font-family: "Red Hat Display" !important;
  font-size: 3vw !important;
  font-weight: 700 !important;
`;

const TravelTextBottom = styled(Typography)`
  font-family: "Red Hat Display" !important;
  font-size: 3vw !important;
  font-weight: 700 !important;
`;

// World Section

const WorldDiv = styled.div`
  background-color: var(--main-tone);
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 10vw 0 10vw;
  margin-top: 10vh;
  height: 35vh;
`;

const WorldIconDiv = styled.div`
  background-color: var(--main-red);
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25vw;
`;

const WorldIcon = styled.img`
  border-radius: 50%;
  background-color: var(--main-tone);
  padding: 10px;
  width: 10vw;
  height: 10vw;
`;

const WorldTextDiv = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  padding: 0 0 0 5vw;
  color: var(--main-red);
`;

const WorldText = styled(Typography)`
  font-family: "Red Hat Display" !important;
  font-size: 3vw !important;
  font-weight: 700 !important;
`;

const WorldTextBottom = styled(Typography)`
  font-family: "Red Hat Display" !important;
  font-size: 3vw !important;
  font-weight: 700 !important;
`;
