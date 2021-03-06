import React, {useState} from "react";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

import PropTypes from "prop-types";
import {Link, Redirect} from "react-router-dom";
import {useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    fontFamily: "Poppins",
  },
  main: {
    backgroundColor: "var(--main-light)",
  },
  image: {
    backgroundColor: "var(--main-purple)",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1520643187271-06df1162815e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=666&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login({setToken}) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);

  const auth = useSelector((state) => state.auth.value);

  async function loginUser(credentials) {
    return fetch("https://landmarklactor.herokuapp.com/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((data) => data.json())
      .catch((err) => {
        console.log(err.response);
      });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password,
    });
    setToken(token);
    window.location.reload();
  };

  const loginError = () => {
    if (userToken) {
      return userToken.message;
    } else {
      return "";
    }
  };

  const classes = useStyles();
  if (auth === true) {
    return <Redirect to="/" />;
  } else {
    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          className={classes.main}
          component={Paper}
          elevation={6}
          square
        >
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography
              style={{
                color: "var(--main-dark)",
                fontFamily: "Poppins",
                fontWeight: 600,
              }}
              className={classes.light}
              component="h1"
              variant="h5"
            >
              Login To{" "}
              <span
                style={{
                  color: "var(--main-purple)",
                  fontWeight: 800,
                }}
              >
                Landmark Locator
              </span>
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit} noValidate>
              <TextField
                color="primary"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                autoComplete="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
              <Typography
                variant="h6"
                color="error"
                style={{
                  textAlign: "center",
                  fontFamily: "Red Hat Display",
                  fontWeight: "600",
                }}
              >
                {loginError()}
              </Typography>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to="/" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
    );
  }
}
Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
