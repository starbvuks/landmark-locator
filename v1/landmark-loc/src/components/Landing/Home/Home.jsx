import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

import {Button} from "@material-ui/core";
import MapTwoToneIcon from "@material-ui/icons/MapTwoTone";

const Home = () => {
  return (
    <Main>
      <Center>
        <CenterText>
          <Shell src="./img/ii-iconfull.png" alt="icon" />
        </CenterText>
        <CenterIcon>
          <MapIcon src="./img/main-map.png" alt="icon" />
        </CenterIcon>
      </Center>
      {/* <ArrowIconDiv>
        <ArrowIcon src="./img/drop-arrow.png" alt="icon" />
      </ArrowIconDiv> */}
      <GoToMap>
        <GoToText>Go To The Map</GoToText>
        <Link to="/map">
          <GoToMapBtn>
            {<MapTwoToneIcon style={{fill: "var(--main-red)"}} />}
          </GoToMapBtn>
        </Link>
      </GoToMap>
    </Main>
  );
};

export default Home;

const Main = styled.div``;

const Center = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
  margin: 25vh 0 0 10vw;
`;

const CenterText = styled.div``;

const Shell = styled.img`
  width: 50vw;
`;
const CenterIcon = styled.div`
  display: flex;
  align-items: center;
  margin: -10vh 8vw 0 0;
`;

const MapIcon = styled.img`
  width: 25vw;
`;

const ArrowIconDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 8vh 0 0 0;
`;

const ArrowIcon = styled.img`
  width: 5vw;
`;

const GoToMap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10vh 0 0 00; // *with arrow* 10px 0 0 0;
`;

const GoToText = styled.h2`
  font-size: 32px;
  padding-right: 10px;
  font-family: Poppins;
  font-weight: 700;
  color: var(--main-red);
`;

const GoToMapBtn = styled(Button)`
  background-color: var(--main-pink) !important;
  width: 10vw;
  height: 5vh;
  border: 3px solid !important;
  border-radius: 9px !important;
  border-color: var(--main-red) !important;
`;
