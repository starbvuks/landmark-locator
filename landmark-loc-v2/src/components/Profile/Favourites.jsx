import React, {useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";

import {Card, CardContent, CardMedia} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    axios
      .get(`https://landmarklactor.herokuapp.com/landmark`)
      .then((res) => {
        setFavourites(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Main>
      <Content>
        <Header>Favourites</Header>
        <FavouritesList>
          {/* {favourites.map((favourite, index) => ( */}
          <FavouriteCard>
            <LandmarkImage
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Taj_Mahal_in_India_-_Kristian_Bertel.jpg/1200px-Taj_Mahal_in_India_-_Kristian_Bertel.jpg"
              title="state"
              style={{
                width: "10vw",
                height: "20vh",
              }}
            />
            <FavouriteCardContent>
              <h2>Place Name</h2>
              <FavoriteIcon style={{fill: "red"}} />
            </FavouriteCardContent>
          </FavouriteCard>
          {/* ))} */}
        </FavouritesList>
      </Content>
    </Main>
  );
};

export default Favourites;

const Main = styled.div`
  height: 90vh;
  display: flex;
  background-color: var(--main-light1);
  margin-top: -5vh;
  align-items: center;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  width: 60vw;
  font-family: Poppins;
  color: var(--main-dark);
  flex-direction: column;
`;

const Header = styled.span`
  font-size: 4vw;
  font-weight: 700;
  font-family: Poppins;
  color: var(--main-red);
`;

const FavouritesList = styled.div`
  margin: 3vh 0 0 0;
  display: flex;
  flex-wrap: wrap;
`;

const FavouriteCard = styled(Card)`
  display: flex;
  margin: 0 3vw 5vh 0;
  height: 20vh;
  width: 60vw;
  background-color: var(--main-light1) !important;
  border-radius: 25px;
  align-items: center;
  padding: 0 !important;
`;

const FavouriteCardContent = styled(CardContent)`
  display: flex;
  height: 75%;
  padding: 0 0 0 10px;
  flex-direction: column;
  justify-content: space-between;
`;

const Name = styled.span`
  width: 3vw;
`;

const LandmarkImage = styled(CardMedia)``;
