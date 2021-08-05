import React from "react";
import {useState, useEffect} from "react";
import ReactMapGL, {StaticMap, Marker} from "react-map-gl";
import styled from "styled-components";
import RoomIcon from "@material-ui/icons/Room";

const Map = () => {
  const [viewport, setViewport] = useState({
    width: 500,
    height: 500,
    longitude: 1,
    latitude: 1,
    zoom: 8,
  });

  console.log(viewport.latitude);

  const markers = (
    <Marker longitude={viewport.longitude} latitude={viewport.latitude}>
      <RoomIcon fontSize="medium" />
    </Marker>
  );

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setViewport({
        ...viewport,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
    });
  }, []);

  console.log(viewport);

  return (
    <MainDiv>
      <MapDiv>
        <MapHeader>Map</MapHeader>
        <StaticMap
          {...viewport}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >
          {markers}
        </StaticMap>
      </MapDiv>
    </MainDiv>
  );
};

export default Map;

const MainDiv = styled.div`
  margin: 54px 0 0 0;
  height: 100vh;
  background-color: var(--main-dark);
`;

const MapHeader = styled.span`
  margin: 0 0 20px 0;
  font-family: "Red Hat Display";
  font-size: 42pt;
  font-weight: bold;
  color: var(--main-light);
`;

const MapDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
