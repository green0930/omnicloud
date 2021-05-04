import React, {useState, useEffect, useContext} from 'react';
import {
    Paper,
    Grid,
    ButtonBase,
    Typography,
    CssBaseline,
    Button,
    Link,
    Box,
    FormControlLabel
 }
  from '@material-ui/core'
  import SwitchUI from '@material-ui/core/Switch'
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram'
import GitHubIcon from '@material-ui/icons/GitHub'
import image from '../../media/mushroom.jpeg'
import {NavBar} from '../../navigation'
import {SideBar} from './SideBar'
import {Suggestions} from './Suggestions'
import {ProfileCard} from './ProfileCard'
// import {NewProfile} from '../user'
import {Footer} from './Footer'
import {Link as CLink} from 'react-router-dom'
// import axios from 'axios';
import {useStyles} from './profileStyle'
import { CustomThemeContext } from './CustomThemeprovider';
// import {photos} from '../../components'

const socialNetwork = [
        { name: 'GitHub', icon: GitHubIcon },
        { name: 'Twitter', icon: TwitterIcon },
        { name: 'Facebook', icon: FacebookIcon },
        { name: 'LinkedIn', icon: LinkedInIcon},
        { name: 'Instagram', icon: InstagramIcon },
        { name: 'Email', icon: EmailIcon },
        { name: 'Phone', icon: CallIcon },
      ]
   
    //   const handleInfoChange = (event) => {
    //     setValues(prevSate => ({...prevSate, [event.target.name]:event.target.value}))
    
    //     return [values, handleInfoChange]
    //   }

export const UserProfile = () => {
  const classes = useStyles();
  const {currentTheme, setTheme} = useContext(CustomThemeContext)
  const isDark = Boolean(currentTheme === 'dark')
  const [profile, setProfile] = useState([{
        fullName:"",
        userName:"",
        location:"",
        email:"",
        title:"",
        about:"",
        experience: "",
        phone: 0,
        contents:[],
        skills:[],
        social:[],
  }])
  // const [photos, setPhotos] = useState([]);
  // const [show, setShow] = useState(false);
  // const [source, setSource] = useState("");
 const handleThemeChange = (event) => {
   const {checked} = event.target
   if(checked) {
     setTheme('dark')
   } else {
     setTheme('normal')
   }
  }


  useEffect(() => {
    fetch('/UserProfile').then(res=>{
      if(res.ok){
        return res.json()
      }
    }).then(jsonRes => setProfile(jsonRes))
  })

  // useEffect(()=> {
  //     const fetchUser = async = () => {
  //         try{
  //         const result = await axios.get('/Userprofile')
  //         const data = await response.json()
  //         setProfile(data, result)
  //         }catch(err){
  //             console.err('unable to fatch user', err)
  //         }
  //     }
  //   }
  //   fetchUser()
    
  // },[])


  // useEffect(() => {
  //   console.log("useEffect is working?");
  //   async function getThePhotos() {
  //     let photos = await getPhotos();
  //     setPhotos(photos.data);
  //     return photos;
  //   }
  //   getThePhotos();
  // }, []);
  
  // const submitPhoto =(e) => {
  //   uploadPhoto(selectedFile)
  // }


  // const handleClose = () => {
  //   setShow(false);
  // };

  return (
      <>
    <CssBaseline />
    <NavBar />
    <paper className={classes.root} >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <FormControlLabel
            control={<SwitchUI checked={isDark} onChange={handleThemeChange} />}
            label="Theme"
          />
          <Paper className={classes.haeder}>
        <Grid container spacing={1}>
          <Grid item xs={4}>
          <ButtonBase className={classes.image}>
            {/* <ButtonBase onClick={submitPhoto}className={classes.image}> */}
              <img className={classes.img} alt="profilePhoto" src={profile.photo} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs={3} display='flex' >
                <Typography gutterBottom variant="subtitle1">
                <AccountBoxIcon />
                  Profile
                </Typography>
                <Typography variant="body2" gutterBottom>
                 Username
                 {/* value={profile.username} */}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Title
                  {/* value={profile.title} */}
                </Typography>
              </Grid>
              <Grid item xs={12}>
              <Typography variant="caption">
              <Box className={classes.icon}
                color="textSecondary">
                  {socialNetwork.map((network) => (
                    <Link display="flex" variant="caption" href="#" key={network}>
                    <Grid container>
                      <Grid item xs={12}
                      display="flex" 
                      flexDirection='row'
                      spacing={1} 
                      justifyContent="flex-start"
                      alignItems="center"
                      >
                        <network.icon />
                      </Grid>
                      <Grid item xs={12} size="small">{network.name}</Grid>
                    </Grid>
                  </Link>
                  ))}
                  </Box>
                  </Typography>
            </Grid>
              <Grid item>
                <Button 
                component={CLink} 
                to="/" size="small" 
                color="secondary" 
                style={{ cursor: 'pointer' }}>
                  Follow
                </Button>
                <Button 
                component={CLink} 
                to="/Inbox" 
                size="small" 
                color="primary"  
                style={{ cursor: 'pointer' }}>
                  Message
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
          </Paper>
        </Grid>
        </Grid>
        <paper className={classes.root}>
    
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
          <SideBar 
            username={profile.username}
            about={profile.about}
            skill={profile.skill}
            content={profile.content}
          />
              </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
          <ProfileCard 
            username={profile.username}
            image={profile.photo}
            comments={profile.comments}
            content={profile.content}
            />
              </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}> 
          <Suggestions />
          </Paper>
        </Grid>
        <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
              <Footer style={{display:'asolute'}} />
              </Paper>
        </Grid>
        </Grid>
      </Grid>
    </paper>
    </paper>
    </>
  );
}