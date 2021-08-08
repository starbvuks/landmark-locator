import React, {useState, useEffect} from "react";
import styled from "styled-components";
import ReactMapGL, {StaticMap, Marker} from "react-map-gl";
import axios from "axios";

import LandmarkCards from "./LandmarkCards.jsx";
import Navbar from "../Landing/Navbar/Navbar.jsx";

const LandmarkList = (props) => {
  const [landmarkData, setLandmarkData] = useState([]);

  const state = props.match.params.state;
  // console.log(state);

  const [viewport, setViewport] = useState({
    width: "40vw",
    height: "85vh",
    longitude: 73.7559,
    latitude: 18.3663,
    zoom: 8,
  });

  useEffect(() => {
    axios
      .get(`https://landmarklactor.herokuapp.com/landmark?state=${state}`)
      .then((res) => {
        setLandmarkData(res.data.data);
        // console.log(landmarkData[1]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Main>
      <Navbar />
      <MapDiv>
        <StaticMap
          {...viewport}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
          style={{
            position: "fixed",
            left: 0,
            margin: "0 0 0 1vw",
          }}
        ></StaticMap>
      </MapDiv>

      <CardDiv>
        {landmarkData.map((data, index) => (
          <LandmarkCards {...data} key={index} />
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
  margin: 5vh 0 0 2vw;
`;

const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5vh 2vw 0 2vw;
`;
