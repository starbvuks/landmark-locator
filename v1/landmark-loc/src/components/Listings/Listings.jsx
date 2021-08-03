import React from "react";
import styled from "styled-components";

import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
} from "@material-ui/core";

const Listings = () => {
  return (
    <Main>
      <StateCard>
        <StateCardContent>
          <StateName>Andhra Pradesh</StateName>
        </StateCardContent>
        <StateImage
          image="/img/ap.jpg"
          title="state"
          style={{
            width: "25vh",
            height: "25vh",
            padding: "0 0 0 7vw",
            margin: "0",
            maskImage:
              "linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)",
          }}
        />
      </StateCard>
    </Main>
  );
};

export default Listings;

const Main = styled.div`
  margin: 54px 0 0 0;
  display: flex;
  justify-content: center;
`;

const StateCard = styled(Card)`
  width: 25vw;
  margin: 5vh 0 0 0;
  display: flex;
  border-radius: 10px !important;
  align-items: center;
  background-color: var(--main-light) !important;
`;

const StateCardContent = styled(CardContent)``;

const StateName = styled.span`
  font-size: 2vw;
  font-weight: 700;
  margin: 0;
  color: var(--main-red);
  font-family: Poppins !important;
`;

const StateImage = styled(CardMedia)`
  mask-image: linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;
