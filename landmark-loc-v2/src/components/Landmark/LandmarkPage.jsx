import React, {useState, useEffect} from "react";
import ReactMapGL, {StaticMap, Marker} from "react-map-gl";
import axios from "axios";

import Navbar from "../Landing/Navbar/Navbar";
import RoomIcon from "@material-ui/icons/Room";

import Reviews from "./Reviews.jsx";

import {makeStyles} from "@material-ui/core/styles";
import {Grid, Divider} from "@material-ui/core";

import {
  ImageGallery,
  Images,
  Content,
  Name,
  Rating,
  Map,
  Address,
  AddressDiv,
  Description,
} from "./styled.Landmarks.js";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    marginTop: "15vh",
    marginLeft: "10vw",
    marginRight: "5vw",
  },
}));

const LandmarkPage = (props) => {
  const [landmarkDetails, setLandmarkDetails] = useState([]);
  const id = props.match.params.id;

  useEffect(() => {
    axios
      .get(`https://landmarklactor.herokuapp.com/landmark/${id}`)
      .then((res) => {
        setLandmarkDetails(res.data);
        console.log(landmarkDetails);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [viewport, setViewport] = React.useState({
    height: "60vh",
    width: "30vw",
    zoom: 14,
  });

  <Marker
    longitude={landmarkDetails.longitude}
    latitude={landmarkDetails.latitude}
  >
    <RoomIcon fontSize="medium" />
  </Marker>;

  const classes = useStyles();
  return (
    <>
      <Navbar />

      <div className={classes.root}>
        <Grid container spacing={7}>
          <ImageGallery item xs={7}>
            <Images src={landmarkDetails.pictures} alt={landmarkDetails.name} />
            <Content container spacing={3}>
              <Grid item xs={9} style={{marginTop: "2vh"}}>
                <Name>{landmarkDetails.name}</Name>
              </Grid>
              <Grid
                item
                xs={3}
                style={{display: "flex", justifyContent: "center"}}
              >
                <Rating>4.2</Rating>
              </Grid>
            </Content>
          </ImageGallery>
          <Map item xs={4}>
            <ReactMapGL
              {...viewport}
              longitude={landmarkDetails.longitude}
              latitude={landmarkDetails.latitude}
              mapStyle="mapbox://styles/mapbox/streets-v11"
              mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
              onViewportChange={(viewport) => {
                setViewport(viewport);
              }}
            ></ReactMapGL>

            <AddressDiv item xs={12}>
              <Address>
                {landmarkDetails.state}, {landmarkDetails.city},{" "}
                {landmarkDetails.district}{" "}
              </Address>
            </AddressDiv>
          </Map>

          <Grid item xs={11}>
            <Divider variant="middle" style={{margin: "0 0 3vh 0"}} />
            <Description>{landmarkDetails.discription}</Description>
            <Divider variant="middle" style={{margin: "3vh 0 3vh 0"}} />
          </Grid>
        </Grid>
        <Grid item xs={11}>
          <Reviews id={id} />
        </Grid>
      </div>
    </>
  );
};

export default LandmarkPage;
