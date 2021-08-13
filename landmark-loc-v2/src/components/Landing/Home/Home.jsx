import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

import HomeSecond from "./HomeSecond";
import HomeThird from "./HomeThird";

const Home = () => {
  return (
    <Main>
      <Top>
        <Center>
          <CenterText>
            <Shell src="./img/ii-iconfull.png" alt="icon" />
          </CenterText>
          <CenterIcon>
            <Link to="/india-list">
              <MapIcon src="./img/main-map.png" alt="icon" />
            </Link>
          </CenterIcon>
        </Center>
      </Top>
      <HomeSecond />
      <HomeThird />
    </Main>
  );
};

export default Home;

const Main = styled.div`
  overflow: hidden;
  background-image: url("/img/background1.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0 0 20vh 0;
`;

const Top = styled.div``;

const Center = styled.div`
  display: flex;
  background-color: var(--main-light1);
  align-items: center;
  justify-content: center;
  padding: 3.5rem;
  width: 75vw;
  border-radius: 25px;
  margin: 22vh auto;
  box-shadow: var(--main-red) 0px 0 35px -10px;

  @media all and (max-width: 730px) {
    display: flex;
    align-content: center;
    justify-content: center;
  }
`;

const CenterText = styled.div``;

const Shell = styled.img`
  max-width: 42vw;
  margin: 5vh 0 0 0;

  @media all and (max-width: 730px) {
    max-width: 75vw;
  }
`;
const CenterIcon = styled.div`
  display: flex;

  @media all and (max-width: 730px) {
    display: none;
  }
`;

const MapIcon = styled.img`
  max-width: 22vw;
`;
