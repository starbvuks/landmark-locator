import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

import {Card, CardContent} from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

const LandmarkCards = (props) => {
  return (
    <div key={props.key}>
      {/* <Link to="/map" style={{textDecoration: "none"}}> */}
      <LandmarkCard>
        <ImageDiv>
          <LandmarkImage src={props.highlights} />
        </ImageDiv>
        <LandmarkContent>
          <Details>
            <HeaderDiv>
              <LandmarkName>{props.name}</LandmarkName>
              <City>{props.city}</City>
            </HeaderDiv>
          </Details>
          <Right>
            <Rating>3.4</Rating>
            <Link to="/" style={{textDecoration: "none"}}>
              <FavoriteBorderIcon style={{fill: "var(--main-red)"}} />
            </Link>
          </Right>
        </LandmarkContent>
      </LandmarkCard>
      {/* </Link> */}
      <DividerStyled />
    </div>
  );
};

export default LandmarkCards;

const LandmarkCard = styled(Card)`
  width: 55vw;
  height: 25vh;
  display: flex;
  border-radius: 10px !important;
  align-items: center;
  background-color: var(--main-light) !important;
`;

const ImageDiv = styled.div`
  height: 25vh;
  width: 30vw;
`;

const LandmarkImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
`;

const LandmarkContent = styled(CardContent)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const Details = styled.div`
  display: flex;
  height: 23vh;
  flex-direction: column;
  justify-content: space-between;
`;

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const LandmarkName = styled.span`
  font-size: 2.5vw;
  font-weight: 600;
  line-height: 45px;
  padding: 0 4vw 0 0;
  font-family: Poppins !important;
  color: var(--main-black);
  hyphens: auto;
`;

const City = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  padding: 0 0 0 0.3vw;
  color: var(--main-red);
  font-family: Poppins !important;
`;

const Rating = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: var(--main-light);
  margin-right: 10px;
  padding: 6px 10px;
  border-radius: 10px;
  background-color: var(--main-orange);
  font-family: Poppins !important;
`;

const Right = styled.div`
  height: 18vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const DividerStyled = styled.div`
  margin: 15px 0;
`;
