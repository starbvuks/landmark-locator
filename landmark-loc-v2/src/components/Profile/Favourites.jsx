import React, {useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    axios
      .get(`https://landmarklactor.herokuapp.com/landmark`)
      .then((res) => {
        setFavourites(res.data.data);
        // console.log(landmarkData[1]);
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
            <ImageDiv>
              <LandmarkImage src={favourites[0].pictures} />
            </ImageDiv>
            <h2>one</h2>
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
  font-size: 5vw;
  font-weight: 700;
  font-family: Poppins;
  color: var(--main-red);
`;

const FavouritesList = styled.div`
  margin: 5vh 0 0 0;
  background-color: var(--main-red);
  display: flex;
`;

const FavouriteCard = styled.div`
  display: flex;
  border-radius: 25px;
`;

const ImageDiv = styled.div`
  width: 10vw;
  height: 20vh;
`;

const LandmarkImage = styled.img`
  border-radius: 25px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
