import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, InputBase, Menu, MenuItem, Badge } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import CloudCircleIcon from "@material-ui/icons/CloudCircle";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import HomeIcon from "@material-ui/icons/Home";
import DynamicFeedIcon from "@material-ui/icons/DynamicFeed";
import { useHistory, withRouter, Link } from "react-router-dom";
import { logOut } from "../hooks/auth";
import { useStyles } from "./navStyle";

export const NavBar = () => {
  let history = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleUser = (e) => {
    setAnchorEl(e.currentTarget);
  };

  // const handleMenu = (e) => {
  //   setAnchorEl(e.currentTarget);
  // };

  const handleClick = (e) => {
    history.push(e);
    setAnchorEl(null);
  };

  const signOut = () => {
    logOut();
  };
  console.log(history);

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
          <Typography onClick={() => handleClick("/newsfeed")} className={classes.title} variant="h6" noWrap>
            OmniCloud
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.grow} />
          <IconButton aria-label="show home" color="inherit">
            <Badge color="secondary">
              <HomeIcon onClick={() => handleClick("/")} />
            </Badge>
          </IconButton>
          <IconButton aria-label="show newsfeed" color="inherit">
            <Badge badgeContent={10} color="secondary">
              <DynamicFeedIcon onClick={() => handleClick("/Newsfeed")} />
            </Badge>
          </IconButton>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon onClick={() => handleClick("/Inbox")} />
            </Badge>
          </IconButton>
          <IconButton aria-label="show 17 new notifications" color="inherit">
            <Badge badgeContent={17} color="secondary">
              <NotificationsIcon onClick={() => handleClick("/Test")} />
            </Badge>
          </IconButton>
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleUser}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={() => setAnchorEl(null)}
          >
            <MenuItem component={Link} to="/UserProfile">
              Profile
            </MenuItem>
            <MenuItem component={Link} to="/NewProfile">
              My Account
            </MenuItem>
            <MenuItem component={Link} onClick={signOut} to="/">
              SignOut
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default withRouter(NavBar);

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
