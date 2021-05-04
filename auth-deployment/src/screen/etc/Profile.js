import React, {useEffect, useState} from 'react';
import {
  Button,
  CssBaseline,
  Grid,
  Box,
  Paper,
  ButtonBase,
  Typography,
  FormControl,
  InputLabel,
  Input,
  Link
} from '@material-ui/core'

import AccountBoxIcon from '@material-ui/icons/AccountBox';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { makeStyles } from '@material-ui/core/styles';
import image from '../../../media/mushroom.jpeg'
import {NavBar} from '../../../navigation'
import {
  SideBar, 
  ProfileCard, 
  Footer, 
  UserProfile, 
  Suggestions} from '..'
import {Link as CLink} from 'react-router-dom'
import axios from 'axios';
// import { uploadProfile } from "../";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    boxSizing: 'border-box',
    minWidth: '0',
    overflowX: 'hidden'
  },

  paper: {
    padding: theme.spacing(2,0,4),
    margin: 'auto',
    // width: '100%',
    maxWidth: '50%',
    minWidth: '0',
    // margin: `${theme.spacing(1)}px auto`,
    display: 'flex',
    flexWrap: 'noWrap',
    // dispaly: 'flex',
    // flexShrink: '1'
  },
  image: {
    width: 200,
    height: 150,
  },
  img: {
    margin: 'auto',
    display: 'block',
    borderRadius: '10%',
    maxWidth: '150%',
    maxHeight: '125%',
  },
  icon: {
    '& > *': {
      margin: theme.spacing(1),
    },
    marginTop: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3, 2, 4),
  },
  heroButtons: {
    margin: 'auto'
    // marginTop: theme.spacing(1),
    // marginLeft: theme.spacing(10)
  },
  box: {
    display: 'flex',
    flexDirection:'column',
    boxSizing: 'border-box'
    // justifyContent: 'space-between',
    // padding: theme.spacing(1)
  },
  cardGrid: {
    display: 'flex',
    padding: theme.spacing(2),
    margin: theme.spacing('auto'),
  },
  item: {
    margin: theme.spacing(-2, 4),
  },

  // item2: {
  //   margin: theme.spacing(3),
  //   padding: theme.spacing(1)
  // },
  
  footer: {
    backgroundColor: theme.palette.background.paper,
    margin: theme.spacing(1),
    padding: theme.spacing(2),
  },
}));


export const Profile = (props) => {
  const classes = useStyles();
  const [content, setContent] = useState([])
  const [sourse, setSource] = useState([])
  const [social, setSocial] = useState([])

  const {
    username,
    caption,
    userPhoto,
    skill,
    // urlText,
    // iconSize,
    // captionSize,

    about,
    // hideAccountName,
    image,
    // _id,
    // addComment,
    // authorId,
    comments,
    // deleteComment,
    // deletePost,
    // editComment,
    // editPost,
    // getUser,
    // likers,
    likesCount,
    // signedInUserId,
    // text,
    // timestamp,
    // updatePostLikes
  } = props

  // const fetchSource = id => {
  //   setSource(id)
  //   axios.get(`${data}:source ${id}`)
  //   .then(res => {
  //     setArchive(res.data)
  //   })
  // } fetchSource()

  // useEffect(()=> {
  //   const fetchData = async = () => {
  //     try{
  //       const result = await axios.get(url)
  //       setSource(result.data)
  //     }catch(err){
  //       console.err("unable to fatch data", err)
  //     }
  //   } 
  //   fetchData()
  // },[])

  const handleSubmit = (e) => {
    const{updateUser, signedInUser} = props
    setContent(content => content.value)
  }

  const submitForm = (e) => {
    e.preventDefault()
    setSource(UserProfile)
    // uploadProfile(UserProfile)
  }

  const onSelectedFile = (e) => {
    setSource(e.target.files[0])
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar />
     
        {/* User Profile unit */}
        <div className={classes.heroContent}>
            <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container wrap='noWarp' spacing={1}>
          <Grid item xs={12} sm={6}>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="img" src={image} />
            </ButtonBase>
          </Grid>
          <Grid item>
            {/* <ButtonBase className={classes.image}>
            <FormControl onSubmit={submitForm}>
             <InputLabel htmlFor="my-input">Edit Profile</InputLabel>
             <Input 
              id="my-input" 
              aria-describedby="my-helper-text"
              type='file'
              accept=''
              name='profile'
              onChange={onSelectedFile}
              />
              </FormControl>
            </ButtonBase> */}
          </Grid>
          <Grid item xs={8} md container wrap='nowarp'>
            <Grid item xs direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" style={{fontWeight:'bold'}}>
                  <AccountBoxIcon />
                  Profile
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {username}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {about}
                </Typography>
                <Box className={classes.icon}
                dixplay='flex'
                flexDirection='row' 
                flex='1'
                justifyContent='space-between' 
                variant="body2" 
                color="textSecondary">
                  {social.map((network) => (
                    <Link display="block" variant="body1" href="#" key={network}>
                    <Grid container direction="row" spacing={1} alignItems="center">
                      <Grid item>
                        <network.icon />
                      </Grid>
                      <Grid item>{network.name}</Grid>
                    </Grid>
                  </Link>
                  ))}

                  {/* <Link
                   display="block" 
                   variant="body1" 
                   href="#" 
                   key={network}
                 >
                  <LinkedInIcon fontsize='small'/>
                  
                  <TwitterIcon  fontsize='small'/>
                  <FacebookIcon fontsize='small'/>
                  <InstagramIcon  fontsize='small'/>
                  <EmailIcon  fontsize='small'/>
                  <CallIcon fontsize='small'/>
                  </Link> */}
                </Box>
              </Grid>
              
            <div className={classes.heroButtons}>
              <Grid container display='inline' spacing={2} justify="center">
                <Grid item>
                  <Button size="small" color="secondary">
                    friend
                  </Button>
                </Grid>
                <Grid item>
                  <Button component={CLink} to="/" size="small" color="secondary">
                    Follow
                  </Button>
                </Grid>
                <Grid item>
                  <Button 
                  size="small" 
                  color="primary"
                  component={CLink}
                  to="./Inbox">
                    Message
                  </Button>
                </Grid>
              </Grid>
            </div>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
        </div>
         {/* User Profile unit end */}
        <Box  elevation={3} className={classes.box}>
        <Grid Grid Container className={classes.cardGrid} >
          <Grid item xs={3}>
          <SideBar 
            username={username}
            about={about}
            skill={skill}
            content={content}
          />
          </Grid>
          <Grid Grid Container className={classes.cardGrid} >
          <Grid item xs={6} className={classes.item}>
          {/* <Paper elevation={3} > */}
          <ProfileCard 
            username={username}
            image={image}
            comments={comments}
            userPhoto={userPhoto}
            content={content}
            />
          {/* </Paper> */}
          </Grid>
          </Grid>
          <Grid Grid Container className={classes.cardGrid} >
          <Grid item xs={3} className={classes.item2} >
          {/* <Paper xs={3} elevation={3}> */}
          <Suggestions />
        {/* </Paper> */}
        </Grid>
        </Grid>
        </Grid>
        <Paper elevation={3}>
        <Footer style={{display:'asolute'}} />
        </Paper>
      </Box>
    </React.Fragment>
  );
}