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
    latitude: 17.385,
    longitude: 78.4867,
    zoom: 8,
  });

  return (
    <MapDiv>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      />
    </MapDiv>
  );
};

export default Map;

const MapDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
