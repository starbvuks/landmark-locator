import React from "react";
import styled from "styled-components";

import {Link} from "react-router-dom";

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
  width: 45vw;
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

const GoToText = styled.span`
  font-size: 3.8vw;
  font-family: Poppins;
  font-weight: 800;
  color: var(--main-red);
  margin: 0 0 0 2.5vw;
`;

const GitLink = styled.img`
  height: 35vh;
  margin: 30vh 0 0 0;
  cursor: pointer;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(0.9);
  }
`;
