import React from "react";
import styled from "styled-components";

import HomeSecond from "./HomeSecond";
import HomeThird from "./HomeThird";

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
      <HomeSecond />
      <HomeThird />
    </Main>
  );
};

export default Home;

const Main = styled.div`
  overflow: hidden;
`;

const Center = styled.div`
  display: flex;
  background-color: var(--main-light1);
  align-items: center;
  justify-content: center;
  padding: 5rem;
  width: 80vw;
  border-radius: 25px;
  margin: 15vh auto;
  box-shadow: var(--main-lav) 0px 20px 30px -10px;

  @media all and (max-width: 730px) {
    display: flex;
    align-content: center;
    justify-content: center;
  }
`;

const CenterText = styled.div``;

const Shell = styled.img`
  max-width: 45vw;
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
  max-width: 25vw;
`;
