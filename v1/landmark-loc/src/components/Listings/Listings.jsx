import React from "react";
import styled from "styled-components";

import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from "@material-ui/core";

const Listings = () => {
  return (
    <Main>
      {/* <ListHeader>our favourite spots in India</ListHeader> */}
      <CardDiv>
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
      </CardDiv>
    </Main>
  );
};

export default Listings;

const Main = styled.div`
  margin: 54px 5vw 0 5vw;
  display: flex;
`;

const CardDiv = styled.div`
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  flex: 1;
`;

const ListHeader = styled(Typography)``;

const StateCard = styled(Card)`
  margin: 5vh 2vw 0 2vw;
  display: flex;
  flex: 2 1 33%;
  border-radius: 10px !important;
  align-items: center;
  justify-content: space-between;
  background-color: var(--main-light) !important;
`;

const StateCardContent = styled(CardContent)``;

const StateName = styled.span`
  font-size: 32px;
  font-weight: 700;
  color: var(--main-red);
  font-family: Poppins !important;
`;

const StateImage = styled(CardMedia)`
  mask-image: linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;
