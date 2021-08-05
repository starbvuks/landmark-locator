import React from "react";
import styled, {keyframes} from "styled-components";

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
      <ArrowIconDiv>
        <ArrowIcon className="bounce" src="./img/drop-arrow.png" alt="icon" />
      </ArrowIconDiv>
      <HomeSecond />
      <HomeThird />
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
  align-items: center;
  margin: -5vh 8vw 0 0;

  @media all and (max-width: 730px) {
    display: none;
  }
`;

const MapIcon = styled.img`
  max-width: 25vw;
`;

const ArrowIconDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 20vh 0 0 0;

  @media all and (max-width: 730px) {
    margin: 15vh 0 0 0;
  }
`;

const ArrowIcon = styled.img`
  width: 5vw;

  @media all and (max-width: 730px) {
    width: 10vw;
  }
`;