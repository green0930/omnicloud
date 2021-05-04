import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link, useLocation } from "react-router-dom";
import { loginCheck } from "../hooks/auth";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  // toolbarSecondary: {
  //   justifyContent: 'space-between',
  //   overflowX: 'auto',
  // },
  // toolbarLink: {
  //   padding: theme.spacing(1),
  //   flexShrink: 0,
  // },
}));

export const Links = () => {
  const classes = useStyles();
  // const { sections, title } = props;

  return (
    <>
      <Toolbar className={classes.toolbar}>
        <Typography
          component={Link}
          to="/"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          OmniCloud
        </Typography>
        {loginCheck ? (
          ""
        ) : (
          <Button component={Link} to="/SignUp" variant="outlined" size="small">
            Sign up
          </Button>
        )}
      </Toolbar>
      {/* <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar> */}
    </>
  );
};


// import React from 'react'
// import {Nav} from 'react-bootstrap'

// export const Links = () => {
//   return(
//   <Nav
//   className="justify-content-end" activeKey="/home"
//   variant="dark"
// >
//   {/* <Nav.Item>
//     <Nav.Link variant='dark' href="/home">Home</Nav.Link>
//   </Nav.Item> */}
//   <Nav.Item>
//     <Nav.Link href="SignUp">Sign-up</Nav.Link>
//   </Nav.Item>
//   {/* <Nav.Item>
//     <Nav.Link href="Login">Login</Nav.Link>
//   </Nav.Item> */}
// </Nav>
//   )
// }
