import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Main>
      <Text>Landmark</Text>
      <Text>Locator</Text>
    </Main>
  );
};

export default Home;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: left;
  margin: 25vh 0 0 10vw;
  padding: 0;
  font-size: 46pt;
  text-align: left;
`;

const Text = styled.h1`
  padding: 0;
  margin: -30px;
  font-family: Poppins;
  font-weight: 800;
`;
