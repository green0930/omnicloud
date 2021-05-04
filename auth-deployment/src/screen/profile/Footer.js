import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {
    Typography,
    Link
 } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(3,2),
        marginTop:'auto'
      },
}))

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://omnicloud.vercel.app/">
          OmniCloud
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

export const Footer = (props) => {
    const classes = useStyles()
    // const {title} = props

    return (
        <div>
             <footer className={classes.footer}>
        {/* <Typography variant="h6" align="center" gutterBottom>
          
        </Typography> */}
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Asulos Engineering LLC. All Rights Reserved
        </Typography>
        <Copyright />
      </footer>
        </div>
    )
}