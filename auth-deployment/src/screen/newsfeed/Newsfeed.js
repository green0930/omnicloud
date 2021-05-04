import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
// import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import GridList from "@material-ui/core/GridList";
import { Typography } from "@material-ui/core";
import { Avatars } from "./Avatars";
import { Photos } from "../../components";
import { NavBar } from "../../navigation";
import { Cards } from "./Cards";
import PostList from "../../components/containers/PostList";
import { getClientUser } from "../../hooks/auth";
//import FacebookIcon from '@material-ui/icons/Facebook'
//import TwitterIcon from '@material-ui/core/Twitter'
//import LinkedinIcon from '@material-ui/core/LinkedinIcon'

// ReactDom.render()

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const Newsfeed = () => {
  const classes = useStyles();
  //const user = getClientUser();
  let user = { email: "a@b", fn: "John", ln: "Doe", userId: "abcd-1234", followers: [{}], following: [{}] };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          <Avatars />
          <Cards />
        </Typography>
        <GridList className={classes.gridList} cols={2.5}>
          <Photos />
        </GridList>
        <PostList user={user} />
      </Container>
    </div>
  );
};
