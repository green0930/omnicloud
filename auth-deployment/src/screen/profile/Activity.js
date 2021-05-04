import React, { useEffect, useState } from "react";
import {
  Typography,
  Grid,
  Button,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ShareIcon from "@material-ui/icons/Share";
import SaveIcon from "@material-ui/icons/Save";
import CommentIcon from "@material-ui/icons/Comment";
import { makeStyles } from "@material-ui/core/styles";
import { Share } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#EEE",
    overflow: "auto",
    display: "flex",
  },
  grid: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "baseline",
    margin: theme.spacing(0, 2),
  },
  img: {
    display: "flex",
    flexDriection: "row",
    justifyContent: "space-between",
    flexGrow: "1",
    flexWrap: "wrap",
    width: "400",
    padding: theme.spacing(0,1,0),
    margin: theme.spacing(0, 1)
  },
  image: {
    width: "100px",
  },
  box: {
    display: "flex",
    flexDriection: "row",
    margin: theme.spacing(1, 0, 1),
  },
  smimg: {
    width: "45px",
    padding: theme.spacing(0.5),
  },
  icon: {
      margin: theme.spacing(0, 1),
      color: 'grey'
  },
  button: {
    margin: theme.spacing(1)
  }
}));

export const Activity = (props) => {
  const classes = useStyles();
  // const [active, setActive] = useState(false);
  // const [post, setPost] = useState([])

  // const {
  //   storyBorder,
  //   image,
  //   comments,
  //   likedByText,
  //   likedByNumber,
  //   username,
  //   hours
  // } = props

    // useEffect(() => {

    // },[])

  return (
  
      <Grid container className={classes.grid}>
          <Grid item xm className={classes.box}>
            <img
              className={classes.smimg}
              alt="img"
              src="https://bootdey.com/img/Content/avatar/avatar1.png"
            />
            <Typography variant="caption">
              {/* Here needs to be `${username} posted` */}
              Daniel Posted {' '}
              <Typography variant="caption" display="inline" gutterBottom>
                {/* Here needs to be`- ${hours} ago` */}
                - 2 hours ago
              </Typography>
            </Typography>
          </Grid>
          <Grid container>
            <Grid item xs className={classes.img}>
              <img
                className={classes.image}
                alt="avatar1"
                src="https://bootdey.com/img/Content/avatar/avatar6.png"
              />
              <img
                className={classes.image}
                alt="avatar2"
                src="https://bootdey.com/img/Content/avatar/avatar8.png"
              />
              <img
                className={classes.image}
                alt="avatare"
                src="https://bootdey.com/img/Content/avatar/avatar7.png"
              />
            </Grid>
          </Grid>
          <Grid item xs className={classes.icon}>
      <Button
        color="default"
        size="small"
        className={classes.button}
        startIcon={<ThumbUpAltIcon />}
      >
        Like
      </Button>
      <Button
        color="default"
        className={classes.button}
        startIcon={<ShareIcon />}
      >
        Share
      </Button>
      <Button
        color="default"
        size="small"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
      <Button
        color="default"
        size="small"
        className={classes.button}
        startIcon={<CommentIcon />}
      >
        Comment
      </Button>
          </Grid>
        </Grid>
    
  );
};
