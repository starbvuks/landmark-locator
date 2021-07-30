import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Main>
      <Center>
        <CenterText>
          <Shell src="./img/ii-iconfull.png" alt="icon" />
          {/* <Text>
          <TextTop>Landmark</TextTop>
          <TextBot>Locator</TextBot>
        </Text> */}
        </CenterText>
        <CenterIcon>
          <MapIcon src="./img/main-map.png" alt="icon" />
        </CenterIcon>
      </Center>
      <ArrowIconDiv>
        <ArrowIcon src="./img/drop-arrow.png" alt="icon" />
      </ArrowIconDiv>
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

const TextBox = styled.div``;

const Shell = styled.img`
  width: 50vw;
`;

// const Text = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin: -210px 0 0 2vw;
// line-height: 0;
// font-size: 3.5vw;
// text-align: left;
// `;

// const TextTop = styled.h1`
//   padding: 0;
//   font-family: Poppins;
//   font-weight: 800;
//   color: var(--main-red);
// `;

// const TextBot = styled.h1`
//   padding: 0;
//   font-family: Poppins;
//   font-weight: 800;
//   color: var(--main-orange);
// `;

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
