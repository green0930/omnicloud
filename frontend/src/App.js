import React from "react";
import { Switch, Route,withRouter} from "react-router-dom";
import './App.css';
import {Home, Login, SignUp, Newsfeed, Profile, Inbox} from './screen' 
import {NavBar, Links} from './navigation'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({});


const App = ({location}) => {
  console.log(location.pathname)
  const classes = useStyles();
  return (
    < div className = {classes.container}>
     <Links />
     {/* {location.pathname !== './' 
     && location.pathname !== './login' 
     && location.pathname !== './signup'
     && <NavBar />} */}
     {/* <NavBar/> */}
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/Login" component={Login}/>
        <Route exact path="/signup" component={SignUp}/>
        <Route path="/Home" component={Home}/>
        <Route path="/Inbox" component={Inbox}/>
        <Route path="/Newsfeed" component={Newsfeed}/> 
        <Route path="/Profile" component={Profile}/> 

        {/* <Route path="/sidebar" component={Sidebar}/> */}
        <Route path= '*'><h1>404 Not Found</h1></Route> 
        </Switch>
    </div>
  );
}

export default withRouter(App)
