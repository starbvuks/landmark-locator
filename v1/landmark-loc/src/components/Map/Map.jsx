import React from "react";
import {useState} from "react";
import ReactMapGL, {Marker} from "react-map-gl";
import styled from "styled-components";
import RoomIcon from "@material-ui/icons/Room";
const MAPBOX_TOKEN =
  "pk.eyJ1Ijoic3RhcmJ2dWtzIiwiYSI6ImNrbTR2NHphaDA4ZmUzMHBtMTRobjN6MHMifQ.tmPNZOallU2bty-vG7qIdw";

const Map = () => {
  const [viewport, setViewport] = useState({
    width: 500,
    height: 500,
    longitude: 79.3473141412759,
    latitude: 13.684487872955962,
    zoom: 8,
  });

  console.log(viewport.latitude);

  const markers = (
    <Marker longitude={79.3473141412759} latitude={13.684487872955962}>
      <RoomIcon fontSize="medium" />
    </Marker>
  );

  return (
    <MainDiv>
      <MapDiv>
        <ReactMapGL
          {...viewport}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          mapboxApiAccessToken={MAPBOX_TOKEN}
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >
          {markers}
        </ReactMapGL>
      </MapDiv>
    </MainDiv>
  );
};

export default Map;

const MainDiv = styled.div`
  height: 100vh;
  background-color: var(--main-dark);
`;

const MapDiv = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
