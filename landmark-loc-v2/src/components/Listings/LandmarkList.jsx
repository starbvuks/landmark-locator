import React, {useState, useEffect} from "react";
import styled from "styled-components";
import ReactMapGL, {StaticMap, Marker, Popup} from "react-map-gl";
import axios from "axios";

import LandmarkCards from "./LandmarkCards.jsx";
import Navbar from "../Landing/Navbar/Navbar.jsx";
import RoomIcon from "@material-ui/icons/Room";

const LandmarkList = (props) => {
  const [landmarkData, setLandmarkData] = useState([]);
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState();

  const state = props.match.params.state;
  // console.log(state);

  const [viewport, setViewport] = useState({
    width: "40vw",
    height: "85vh",
    longitude: 79.9199,
    latitude: 24.8318,
    zoom: 5,
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

  const selectedIndex = (index) => {
    setSelectedMarker(index);
  };

  const closePopup = () => {
    setSelectedMarker(null);
  };

  const openPopup = (index) => {
    setSelectedMarker(index);
  };

  return (
    <Main>
      <Navbar />
      <MapDiv>
        <ReactMapGL
          {...viewport}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
          style={{
            position: "fixed",
            left: 0,
            margin: "0 0 0 1vw",
          }}
        >
          {landmarkData.map((data, index) => (
            <>
              <Marker
                longitude={data.longitude}
                latitude={data.latitude}
                key={index}
                onClick={() => setPopupOpen(true)}
              >
                <RoomIcon fontSize="small" style={{fill: "red"}} />
              </Marker>
              {popupOpen && (
                <Popup
                  key={index}
                  latitude={data.latitude}
                  longitude={data.longitude}
                  onClose={() => setPopupOpen(false)}
                  closeButton={true}
                  offsetLeft={10}
                >
                  <p>{data.name}</p>
                </Popup>
              )}
            </>
          ))}
        </ReactMapGL>
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
