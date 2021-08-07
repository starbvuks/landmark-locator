import React from "react";
import Navbar from "../Landing/Navbar/Navbar";
import Paper from "@material-ui/core/Paper";

import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    marginTop: 100,
    marginLeft: 100,
    marginRight: 100,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    fontSize: 24,
    color: "#ba000d",
    fontWeight: "Bold",
  },
  paper1: {
    padding: theme.spacing(4),
    textAlign: "center",
    color: "#ba000d",
    fontSize: 24,
    fontWeight: "Bold",
  },

  box1: {
    height: 400,
    width: 800,
    border: 2,
  },

  box2: {
    height: 400,
    width: 400,
  },
  box4: {
    height: 400,
  },
}));

const DiscriptionPage = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />

      <div className={classes.root}>
        <Grid container spacing={7}>
          <Grid item xs={7}>
            <Paper className={[classes.paper, classes.box1]}>images</Paper>
          </Grid>
          <Grid item xs={5}>
            <Paper className={[classes.paper, classes.box2]}>Map</Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper className={[classes.paper1, classes.box3]}>
              Loacation Name
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={[classes.paper1, classes.box3]}>Ratings</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper1}>Address</Paper>
          </Grid>

          <Grid item xs={11}>
            <Paper className={[classes.paper1, classes.box4]}>
              Description
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default DiscriptionPage;
