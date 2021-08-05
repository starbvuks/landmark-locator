import React from "react";
import styled from "styled-components";

import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import MapTwoToneIcon from "@material-ui/icons/MapTwoTone";

const HomeThird = () => {
  return (
    <Main>
      <GoToMap>
        <GoToText>Go To The Map</GoToText>
        <Link to="/india-list">
          <GoToMapBtn>
            {<MapTwoToneIcon style={{fill: "var(--main-red)"}} />}
          </GoToMapBtn>
        </Link>
      </GoToMap>
      <IndiaMapDiv>
        <IndiaMap src="/img/india-map.png" alt="map" />
      </IndiaMapDiv>
    </Main>
  );
};

export default HomeThird;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin: 40vh 0 0 0;
  overflow: hidden;
`;

const IndiaMapDiv = styled.div`
  margin: 0 -5vw 0 0;
`;

const IndiaMap = styled.img`
  width: 60vw;
`;

const GoToMap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin: 10vh 0 0 5vw;
`;

const GoToText = styled.h2`
  font-size: 5vw;
  font-family: Poppins;
  font-weight: 700;
  color: var(--main-red);
  margin: 0;
`;

const GoToMapBtn = styled(Button)`
  width: 15vw;
  height: 6vh;
  border: 3px solid !important;
  border-radius: 9px !important;
  background-color: var(--main-pink) !important;
  border-color: var(--main-red) !important;
`;
