import React from "react";
import styled from "styled-components";

import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import MapTwoToneIcon from "@material-ui/icons/MapTwoTone";

const HomeThird = () => {
  return (
    <Main>
      <GoToMap>
        <GoToText>Click On The Map!</GoToText>
        <GitLink
          onClick={() =>
            window.open("https://github.com/starbvuks/landmark-locator")
          }
          src="/img/github-link.png"
          alt="github"
        />
      </GoToMap>
      <Link to="/india-list">
        <IndiaMapDiv>
          <IndiaMap src="/img/india-map.png" alt="map" />
        </IndiaMapDiv>
      </Link>
    </Main>
  );
};

export default HomeThird;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin: 30vh 0 0 0;
  overflow: hidden;
  padding: 5vh 0;
`;

const IndiaMapDiv = styled.div`
  margin: 0 4vw 0 0;
`;

const IndiaMap = styled.img`
  width: 50vw;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(0.9);
  }
`;

const GoToMap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10vh 0 0 6vw;
`;

const GoToText = styled.h2`
  font-size: 4.2vw;
  font-family: Poppins;
  font-weight: 700;
  color: var(--main-red);
  margin: 0;
`;

const GitLink = styled.img`
  height: 38vh;
  margin: 30vh 0 0 0;
  cursor: pointer;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(0.9);
  }
`;

const GoToMapBtn = styled(Button)`
  width: 15vw;
  height: 6vh;
  border: 3px solid !important;
  border-radius: 9px !important;
  background-color: var(--main-pink) !important;
  border-color: var(--main-red) !important;
`;
