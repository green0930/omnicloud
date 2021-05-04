import React from "react";
import {
  CssBaseline,
  Typography,
  Chip,
  Button,
  Grid,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";
import WebIcon from "@material-ui/icons/Web";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import BrushIcon from "@material-ui/icons/Brush";
import StarRateIcon from "@material-ui/icons/StarRate";
import InfoIcon from "@material-ui/icons/Info";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import { makeStyles } from "@material-ui/core/styles";
//import MetaTags from 'react-meta-tags'

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    width: "100%",
  },
  list: {
    maxWidth: 400,
    backgroundColor: theme.palette.background.paper,
  },
  chip: {
    margin: theme.spacing(3),
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  section1: {
    margin: theme.spacing(0, 1),
  },
  section2: {
    margin: theme.spacing(2),
  },
  section3: {
    margin: theme.spacing(2),
  },
}));

export const SideBar = ({ sources, source }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* <Paper elevation={3}>
            <Grid container >
            <div className={classes.root}> */}
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <div className={classes.section1}>
              <Grid container m={2} align="center">
                <Grid item xs>
                  <Typography gutterBottom variant="sm">
                    {" "}
                    <StarRateIcon fontSize="small" /> My Content!
                  </Typography>
                </Grid>
              </Grid>
              <Divider variant="large" />
            </div>

            <Grid item xs={3}>
              <List className={classes.list}>
                <ListItem whiteSpace="normal">
                  <ListItemAvatar>
                    <Avatar>
                      <WebIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="https://www.codepen.io" secondary="" />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <SportsEsportsIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="twitch.tv" secondary="" />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <BrushIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="https://www.artsteps.com" secondary="" />
                </ListItem>
                <Divider variant="large" />
              </List>
            </Grid>

            <div className={classes.section2}>
              <Grid container m={2} align="center">
                <Grid item xs>
                  <Typography gutterBottom variant="sm">
                    <InfoIcon fontSize="small" /> About Me
                  </Typography>
                </Grid>
              </Grid>
              <Divider variant="large" />
              <Grid container alignItems="center">
                <Grid item xs>
                  <Typography color="textPrimary" variant="sm">
                    Experience
                  </Typography>
                </Grid>
              </Grid>
              <Grid container align="center">
                <Typography color="textDefault" variant="sm">
                  FaceBook
                </Typography>
              </Grid>
              <Typography color="textSecondary" variant="body2">
                Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the hall.
              </Typography>
            </div>
            <Divider variant="middle" />
            <div className={classes.section2}>
              <Grid container align="center">
                <Grid item xs={12}>
                  <Typography gutterBottom variant="sm">
                    <EmojiEventsIcon fontSize="small" /> My Skills
                  </Typography>
                </Grid>
              </Grid>
              <Divider variant="large" />
              <div className={classes.div}>
                {/* <MetaTags> */}
                {/* <meta 
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"/> */}
                <Grid containder className={classes.chipbox}>
                  <Grid item xs className={classes.chip}>
                    <Chip color="primary" size="small" label="HTML" component="a" href="#html" HTML />
                    <Chip color="primary" size="small" label="JAVASCRIPT" component="a" href="#html" JAVASACRIPT />
                    <Chip color="primary" size="small" label="REACT JS" component="a" href="#html" REACT JS />
                    <Chip color="primary" size="small" label="EXPRESS" component="a" href="#html" EXPRESS />
                    <Chip color="primary" size="small" label="MONGODB" component="a" href="#html" MONGODB />
                    {/* <Chip className={classes.chip} label="HTML" />
          <Chip className={classes.chip} color="primary" label="JAVASCRIPT" href ="/JAva" />
          <Chip className={classes.chip} color="secondary" label="REACT JS" />
          <Chip className={classes.chip} color="primary" label="CSS" />
          <Chip className={classes.chip} color="main"label="EXPRESS" />
          <Chip className={classes.chip} color="secondary"label="MONGODB" /> */}
                  </Grid>
                </Grid>
                {/* </MetaTags> */}
              </div>
            </div>
            <div className={classes.section3}>
              <Grid container alignItems="center">
                <Typography color="textDefault" variant="sm"></Typography>
              </Grid>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
{
  /* </div> */
}

{
  /* <Card className={classes.root} variant="outlined">
                <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                <StarRateIcon fontSize="small" />{' '} User Popularity
                </Typography>
                <Typography variant="h5" component="h2">
                
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                adjective
                </Typography>
                <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
            </Card>
         
            </Grid>
            <Divider className={classes.divider}/>
            <Grid container spacing={6}>
      
            <Card className={classes.root} variant="outlined">
                <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                <InfoIcon fontSize="small"/>{' '}
                 About Me
                </Typography>
                <Typography variant="h5" component="h2">
                
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                adjective
                </Typography>
                <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
            </Card> */
}
