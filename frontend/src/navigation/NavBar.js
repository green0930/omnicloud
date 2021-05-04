import React, {useState} from 'react'
import {
  AppBar, 
  Toolbar, 
  IconButton, 
  Typography, 
  InputBase,
  Menu,
  MenuItem,
  Badge,
} from '@material-ui/core'
import {fade, makeStyles} from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search'
import CloudCircleIcon from '@material-ui/icons/CloudCircle'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HomeIcon from '@material-ui/icons/Home'
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import {useHistory, withRouter, Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1.
  },
  appBar: {
        backgroundColor: 'transparent',
        color: 'black',
        // boxShadow: '0px, 0px, 0px, 0px'
      },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title:{
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]:{
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover':{
      backgroundColor: fade(theme.palette.common.white,0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

export const NavBar = ({pathname}) => {
  console.log(pathname)
  let history = useHistory()
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const open=Boolean(anchorEl)

  const handleMenu = e => {
    setAnchorEl(e.currentTarget)
  }

  const handleClick = e => {
    history.push(e)
    setAnchorEl(null)
  }
  console.log(history)

  return (
    <div className={classes.root}>
      
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            // onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <CloudCircleIcon />
            <Typography onClick={()=> handleClick('/')}className={classes.title} variant="h6" noWrap>
              OmniCloud
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon show={!'/' === pathname} />
              </div>
              <InputBase 
                placeholder="Search..."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{'aria-label': 'search'}}
                />
            </div>
            <div className={classes.grow} />
            <IconButton aria-label="show home" color="inherit">
              <Badge color="secondary">
                <HomeIcon onClick={()=>handleClick('/')}/>
              </Badge>
            </IconButton>
            <IconButton aria-label="show newsfeed" color="inherit">
              <Badge badgeContent={10} color="secondary">
                <DynamicFeedIcon onClick={()=>handleClick('/Newsfeed')}/>
              </Badge>
            </IconButton>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon onClick={()=>handleClick('/Inbox')}/>
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon  onClick={()=>handleClick('/Notification')}/>
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={()=>setAnchorEl(null)}
              >
                <MenuItem component={Link} to="/Profile">Profile</MenuItem>
                <MenuItem component={Link}  to="/Account">My account</MenuItem>
                <MenuItem component={Link} to="/SignOut" >SignOut</MenuItem>
              </Menu> 
        </Toolbar>
      </AppBar>
    </div>
  )
}
export default withRouter(NavBar)



// import React from 'react'
// import {Nav, Navbar, Form, FormControl,Button} from 'react-bootstrap'
// // import {Home} from '../screen/homepage'

// export const NavBar = (props) => {
//     return (
//         <>
//     <Navbar bg="light" variant="light">
//     <Navbar.Brand href="#home">OmniCloud</Navbar.Brand>
//     <Nav className="mr-auto">
//       <Nav.Link href="#home">Home</Nav.Link>
//       <Nav.Link href="#profile">Profile</Nav.Link>
//       <Nav.Link href="#feed">Feed</Nav.Link>
//     </Nav>
//     <Form inline>
//       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//       <Button variant="outline-primary">Search</Button>
//     </Form>
//   </Navbar>
//         </>
//     )
// }