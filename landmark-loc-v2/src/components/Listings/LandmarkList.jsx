import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

import {Card, CardMedia, CardContent, Typography} from "@material-ui/core";

const LandmarkList = () => {
  return (
    <Main>
      <Link to="/map" style={{textDecoration: "none"}}>
        <CardDiv>
          <LandmarkCard>
            <LandmarkImage src="https://www.trawell.in/admin/images/upload/336491791Pune_Sinhagad_Fort_Main.jpg" />
            <LandmarkContent>
              <Details>
                <LandmarkName>Signhad Fort</LandmarkName>
                <City>Pune</City>
              </Details>
              <Rating>3.4</Rating>
            </LandmarkContent>
          </LandmarkCard>
        </CardDiv>
      </Link>
    </Main>
  );
};

export default LandmarkList;

const Main = styled.div`
  margin: 54px 5vw 10vh 5vw;
  flex-flow: row wrap;
  display: flex;
  justify-content: center;
`;

const CardDiv = styled.div`
  display: flex;
`;

const LandmarkCard = styled(Card)`
  margin: 5vh 2vw 0 2vw;
  display: flex;
  width: 50vw;
  height: 20vh;
  border-radius: 10px !important;
  align-items: center;
  background-color: var(--main-light) !important;
`;

const LandmarkImage = styled.img`
  height: 85%;
  border-radius: 20px;
  padding: 0 0 0 15px;
`;

const LandmarkContent = styled(CardContent)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const Details = styled.span`
  display: flex;
  height: 17vh;
  flex-direction: column;
  align-items: end;
  justify-content: flex-start;
`;

const LandmarkName = styled.span`
  font-size: 2.5rem;
  font-weight: 500;
  color: var(--main-red);
  font-family: Poppins !important;
`;

const City = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  padding: 5px 0 0 0;
  color: var(--main-red);
  font-family: Poppins !important;
`;

const Rating = styled.span`
  font-size: 22px;
  font-weight: 700;
  color: var(--main-light);
  text-align: center;
  padding: 6px 10px;
  background-color: var(--main-orange);
  border-radius: 10px;
  font-family: Poppins !important;
`;
