// import React, {useState} from 'react'
// import { makeStyles} from "@material-ui/core/styles"
// import {Typography, Link} from '@material-ui/core'
// import {Link} from "react-router-dom"

// const useStyles = makeStyles(theme => ({
//   root: {
//     '& > * + *': {
//       marginLeft: theme.spacing(2),
//   }

// }}))
// export const Links = (props) => {
//     const classes = useStyles()
//     const [active, setActive] = useState(false)

//     const handleSubmit= (e) => {
//         e.preventDefault()
//         setActive(true)
//     }
//     return (
//       <Typography className={classes.root}>
//       <Link 
//         href="Home" 
//         variant="body2" 
//         active={active}
//         onSubmit={handleSubmit}>
//         Home
//       </Link>
//       <Link 
//         href="Login" 
//         variant="body2" 
//         active={active}
//         onSubmit={handleSubmit} >
//         Login
//       </Link>
//       <Link 
//         href="SignUp" 
//         variant="body2"
//         active={active}
//         onSubmit={handleSubmit}>
//         Sign-up
//       </Link>
//     </Typography>
//     )
//     }

import React from 'react'
import {Nav} from 'react-bootstrap'

export const Links = () => {
  return(
  <Nav
  className="justify-content-end" activeKey="/home"
  variant="dark"
>
  {/* <Nav.Item>
    <Nav.Link variant='dark' href="/home">Home</Nav.Link>
  </Nav.Item> */}
  <Nav.Item>
    <Nav.Link href="SignUp">Sign-up</Nav.Link>
  </Nav.Item>
  {/* <Nav.Item>
    <Nav.Link href="Login">Login</Nav.Link>
  </Nav.Item> */}
</Nav>
  )
}

