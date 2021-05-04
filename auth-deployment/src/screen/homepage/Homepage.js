import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { makeStyles, ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CloudIcon from "@material-ui/icons/Cloud";

const useStyles = makeStyles({
  root: {
    // background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
    background: "linear-gradient(45deg, #96ceb4, #FF8E53)",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    border: 0,
    marginBottom: 15,
    color: "white",
    padding: "0 30px",
  },

  button: {
    marginTop: "30px",
  },
});

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 36,
    },
  },
});

export const Home = () => {
  const classes = useStyles();

    // const loginSubmit= (e) => {
    //     e.preventDefault()
    //     setActive(true)
    // }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <Typography variant="h2" component="div">
          Welcome to OmniCloud
        </Typography>
        <Typography variant="subtitles1">Connecting the Social in Social Media</Typography>
        <Button
          className={classes.button}
          startIcon={<CloudIcon />}
          size="large"
          variant="contained"
          color="default"
          component={Link}
          to="/login"
        >
          Login
        </Button>
        {/* <Button
          className={classes.button}
          startIcon={<CloudIcon />}
          size="large"
          variant="contained"
          color="default"
          component={Link}
          to="/signup"
        >
          Sign Up
        </Button> */}
      </div>
    </ThemeProvider>
  );
};
