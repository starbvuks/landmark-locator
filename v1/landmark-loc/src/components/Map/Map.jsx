import React from "react";
import {useState} from "react";
import ReactMapGL from "react-map-gl";
import styled from "styled-components";

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoic3RhcmJ2dWtzIiwiYSI6ImNrbTR2NHphaDA4ZmUzMHBtMTRobjN6MHMifQ.tmPNZOallU2bty-vG7qIdw";

const Map = () => {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 13.684487872955962,
    longitude: 79.3473141412759,
    zoom: 8,
  });

  return (
    <MainDiv>
      <MapDiv>
        <ReactMapGL
          {...viewport}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          mapboxApiAccessToken={MAPBOX_TOKEN}
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
        />
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
