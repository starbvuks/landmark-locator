import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import ReactMapGL, {StaticMap, Marker} from "react-map-gl";
import axios from "axios";

import {Card, CardContent} from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

const LandmarkList = () => {
  const [landmarkData, setLandmarkData] = useState([]);
  const [currentState, setCurrentState] = useState();

  const [viewport, setViewport] = useState({
    width: "40vw",
    height: "85vh",
    longitude: 73.7559,
    latitude: 18.3663,
    zoom: 8,
  });

  const getData = () => {
    axios
      .get("https://landmarklactor.herokuapp.com/landmark")
      .then((res) => {
        setLandmarkData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  };

  useEffect(() => {
    getData();
  }, []);

  const goToState = (e) => {
    const currentData = e.target.innerText;
    setCurrentState(currentData);
    console.log(currentState);
  };

  return (
    <Main>
      <MapDiv>
        <StaticMap
          {...viewport}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
          style={{position: "fixed"}}
        ></StaticMap>
      </MapDiv>
      <CardDiv>
        {landmarkData.map((data, index) => (
          <>
            {/* <Link to="/map" style={{textDecoration: "none"}}> */}
            <LandmarkCard key={index} onClick={goToState}>
              <ImageDiv>
                <LandmarkImage src={data.highlights} />
              </ImageDiv>
              <LandmarkContent>
                <Details>
                  <HeaderDiv>
                    <LandmarkName>{data.name}</LandmarkName>
                    <City>{data.city}</City>
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
          </>
        ))}
      </CardDiv>
    </Main>
  );
};

export default LandmarkList;

const Main = styled.div`
  margin: 54px 0 10vh 1.5vw;
  display: flex;
  justify-content: space-between;
`;

const MapDiv = styled.div`
  margin: 5vh 0 0 0;
`;

const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5vh 2vw 0 2vw;
`;

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
  font-size: 2.3rem;
  font-weight: 600;
  line-height: 45px;
  padding: 0 5vw 0 0;
  font-family: Poppins !important;
  color: var(--main-black);
`;

const City = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  padding: 0 0 0 0.5vw;
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
