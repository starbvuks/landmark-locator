import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import ReactMapGL, {StaticMap, Marker} from "react-map-gl";
import axios from "axios";

import {Card, CardContent, Divider} from "@material-ui/core";

const api = axios.create({
  baseUrl: `https://landmarklactor.herokuapp.com`,
});

const LandmarkList = () => {
  const [landmarkData, setLandmarkData] = useState([]);

  const [viewport, setViewport] = useState({
    width: "35vw",
    height: "80vh",
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

  return (
    <Main>
      <MapDiv>
        <StaticMap
          {...viewport}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
        ></StaticMap>
      </MapDiv>
      <CardDiv>
        {landmarkData.map((data, index) => (
          <Link to="/map" style={{textDecoration: "none"}}>
            <LandmarkCard key={index}>
              <LandmarkImage src={data.highlights} />
              <LandmarkContent>
                <Details>
                  <LandmarkName>{data.name}</LandmarkName>
                  <City>{data.city}</City>
                </Details>
                <Rating>3.4</Rating>
              </LandmarkContent>
            </LandmarkCard>
          </Link>
        ))}
        <DividerStyled />
      </CardDiv>
    </Main>
  );
};

export default LandmarkList;

const Main = styled.div`
  margin: 54px 5vw 10vh 5vw;
  display: flex;
  justify-content: center;
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
  height: 20vh;
  display: flex;
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
  color: var(--main-red);
  font-family: Poppins !important;
`;

const Rating = styled.span`
  font-size: 22px;
  font-weight: 700;
  color: var(--main-light);
  margin-right: 10px;
  padding: 6px 10px;
  background-color: var(--main-orange);
  border-radius: 10px;
  font-family: Poppins !important;
`;

const DividerStyled = styled.div`
  margin: 15px 0;
`;
