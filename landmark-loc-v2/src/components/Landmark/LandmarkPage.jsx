import React, {useState, useEffect} from "react";
import ReactMapGL, {StaticMap, Marker} from "react-map-gl";
import axios from "axios";

import Navbar from "../Landing/Navbar/Navbar";
import Paper from "@material-ui/core/Paper";
import RoomIcon from "@material-ui/icons/Room";

import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    marginTop: "15vh",
    marginLeft: "10vw",
    marginRight: "5vw",
  },
  paper: {
    padding: theme.spacing(1),
    margin: "0 0 0 0",
    textAlign: "center",
    fontSize: 24,
    color: "#ba000d",
    fontWeight: "Bold",
  },
  paper1: {
    padding: theme.spacing(4),
    margin: "2vh 0 0 0",
    textAlign: "center",
    color: "#ba000d",
    fontSize: 24,
    fontWeight: "Bold",
  },

  box1: {
    height: "55vh",
    width: "45vw",
    border: 2,
  },

  box2: {
    height: "55vh",
  },
  box4: {
    height: "50vh",
  },
}));

const LandmarkPage = (props) => {
  const [landmarkDetails, setLandmarkDetails] = useState([]);

  const [viewport, setViewport] = React.useState({
    height: "55vh",
    width: "30vw",
    // longitude: 1,
    // latitude: 1,
    zoom: 14,
  });

  const markers = (
    <Marker longitude={viewport.longitude} latitude={viewport.latitude}>
      <RoomIcon fontSize="medium" />
    </Marker>
  );

  const id = props.match.params.id;

  useEffect(() => {
    axios
      .get(`https://landmarklactor.herokuapp.com/landmark/${id}`)
      .then((res) => {
        setLandmarkDetails(res.data);
        console.log(landmarkDetails.longitude);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const classes = useStyles();
  return (
    <>
      <Navbar />

      <div className={classes.root}>
        <Grid container spacing={7}>
          <Grid item xs={7}>
            <img
              className={[classes.box1]}
              src={landmarkDetails.highlights}
              alt={landmarkDetails.name}
            />
            <Grid container spacing={3}>
              <Grid item xs={7}>
                <Paper className={[classes.paper1, classes.box3]}>
                  {landmarkDetails.name}
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={[classes.paper1, classes.box3]}>
                  Ratings
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <StaticMap
              height="55vh"
              width="30vw"
              longitude={landmarkDetails.longitude}
              latitude={landmarkDetails.latitude}
              zoom={8}
              mapStyle="mapbox://styles/mapbox/streets-v11"
              mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
            />

            <Grid item xs={12}>
              <Paper className={classes.paper1}>
                {landmarkDetails.state}, {landmarkDetails.city},{" "}
                {landmarkDetails.district}{" "}
              </Paper>
            </Grid>
          </Grid>

          <Grid item xs={11}>
            <Paper className={[classes.paper1, classes.box4]}>
              {landmarkDetails.discription}
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default LandmarkPage;
