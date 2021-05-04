import React from 'react'
import { makeStyles} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Typography } from '@material-ui/core'
import {Avatars} from './Avatars'
import {Photos} from '../../components'
import { NavBar } from '../../navigation'
//import FacebookIcon from '@material-ui/icons/Facebook'
//import TwitterIcon from '@material-ui/core/Twitter'
//import LinkedinIcon from '@material-ui/core/LinkedinIcon'


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
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

export const Newsfeed = (props) => {
    console.log(props)
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <NavBar />
            <Container maxWidth="sm">
                <Typography compnent="h1" variant="h2" align="center"
                color="textPrimary" gutterBottom>
                    <Avatars />
                </Typography>
       <GridList className={classes.gridList} cols={2.5}>
         <Photos />
         </GridList> 
         </Container>
     </div>
            /* <header>
                <Profile iconSize="medium" storyBorder={storyBorder}/>
                <FeedButton className = "feedButton" />
            </header>
            <img className="feedImage" src={image} alt="feed content" />
            <FeedMenu />
            <div className="likedBy">
                <Profile iconSize="small" hideAccountName={true}/>
                <span>
                  Liked by <strong>{likedByText}</strong> and{" "}
                       <strong>{likedByNumber} others</strong>
                </span>
            </div>
            <div className="comments">
             {comments.map(comments => {
               return (
                     <Comment key={comment.id}
                         accountName={comments.user}
                         comment={comment.text} />
               )
            })}
            </div> */
            
                 
    )
}