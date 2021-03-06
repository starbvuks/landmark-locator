import React, {useState, useEffect} from "react";
import styled from "styled-components";
import ReactMapGL, {Marker, Popup} from "react-map-gl";
import axios from "axios";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";

import LandmarkCards from "./LandmarkCards.jsx";
import Navbar from "../Landing/Navbar/Navbar.jsx";
import RoomIcon from "@material-ui/icons/Room";

mapboxgl.workerClass =
  // eslint-disable-next-line import/no-webpack-loader-syntax
  require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const LandmarkList = (props) => {
  const [landmarkData, setLandmarkData] = useState([]);
  const [popupOpen, setPopupOpen] = useState(false);

  const id = props.match.params.id;

  const [viewport, setViewport] = useState({
    width: "40vw",
    height: "85vh",
    longitude: 81.9199,
    latitude: 20.8,
    zoom: 4,
  });

  useEffect(() => {
    axios
      .get(`https://landmarklactor.herokuapp.com/related/${id}`)
      .then((res) => {
        setLandmarkData(res.data.state.landmark);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

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
            <div key={data._id}>
              <Marker
                key={index}
                longitude={data.longitude}
                latitude={data.latitude}
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
            </div>
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
  margin: 2vh 0 0 2vw;
`;

const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2vh 2vw 0 2vw;
`;
