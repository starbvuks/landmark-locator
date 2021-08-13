import React, {useEffect} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import axios from "axios";

import {Card, MenuItem, Button} from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
// import FavoriteIcon from "@material-ui/icons/Favorite";

const LandmarkCards = (props) => {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  const id = userToken.user.id;

  const locId = props._id;

  const favouriteHandle = (e) => {
    e.preventDefault();

    axios
      .post(`https://landmarklactor.herokuapp.com/user/${id}`, {
        favourite: locId,
      })
      .then((data) => {
        console.log("success");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div key={props._id}>
      <LandmarkCard>
        <LinkDiv
          to={`/landmark/${props._id}`}
          style={{textDecoration: "inherit", color: "inherit"}}
        >
          <ImageDiv>
            <LandmarkImage src={props.pictures} />
          </ImageDiv>
          <Details>
            <HeaderDiv>
              <LandmarkName>{props.name}</LandmarkName>
              <City>{props.city}</City>
            </HeaderDiv>
          </Details>
        </LinkDiv>
        <Right>
          <Rating>4.5</Rating>
          <MenuItem component={Button} onClick={favouriteHandle}>
            <FavoriteBorderIcon style={{fill: "var(--main-red)"}} />
          </MenuItem>
        </Right>
      </LandmarkCard>
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

const LinkDiv = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
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

const Details = styled.div`
  width: 100%;
  display: flex;
  height: 23vh;
  flex-direction: column;
  justify-content: space-between;
  padding: 1vw;
`;

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const LandmarkName = styled.span`
  font-size: 2.5vw;
  font-weight: 600;
  line-height: 45px;
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

const Right = styled.div`
  height: 18vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 1vw;
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

const DividerStyled = styled.div`
  margin: 15px 0;
`;
