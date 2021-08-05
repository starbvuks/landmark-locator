import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

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
      <HeaderText>
        <ListHeader variant="h2">
          our favourite spots in{" "}
          <span style={{fontWeight: 900, color: "var(--main-red)"}}>India</span>
        </ListHeader>
        <ListFooter variant="h5">
          pick a state and find them for yourself
        </ListFooter>
      </HeaderText>
      <Link to="/map" style={{textDecoration: "none"}}>
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
        </CardDiv>
      </Link>
      <Link to="/map" style={{textDecoration: "none"}}>
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
        </CardDiv>
      </Link>
      <Link to="/map" style={{textDecoration: "none"}}>
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
        </CardDiv>
      </Link>
      <Link to="/map" style={{textDecoration: "none"}}>
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
        </CardDiv>
      </Link>
    </Main>
  );
};

export default Listings;

const Main = styled.div`
  margin: 54px 5vw 0 5vw;
  flex-flow: row wrap;
  display: flex;
  justify-content: center;
`;

const HeaderText = styled(Typography)`
  display: flex;
  flex-direction: column;
  margin: 0 10vw;
`;

const ListHeader = styled(Typography)`
  margin: 10vh 0 0 0 !important;
  text-align: center !important;
  font-family: Red Hat Display !important;
  font-weight: 700 !important;
  color: var(--main-orange);
`;

const ListFooter = styled(Typography)`
  margin: 3vh 0 10vh 0 !important;
  text-align: center !important;
  font-family: Poppins !important;
  font-weight: 400 !important;
  color: var(--main-red);
`;

const CardDiv = styled.div`
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  flex: 1;
`;

const StateCard = styled(Card)`
  margin: 5vh 2vw 0 2vw;
  display: flex;
  flex: 1 0 25%;
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
