import React, { useState } from "react";
import { Switch, Route, withRouter, Redirect, useHistory } from "react-router-dom";
import "./App.css";
import { v4 } from "uuid";
import { Links } from "./navigation";
import { 
  CssBaseline,
 } from "@material-ui/core";
//  import {ThemeProvider} from '@material-ui/core/styles'
 import {
   Home, 
   Login, 
   SignUp, 
   Newsfeed, 
   Inbox, 
   NewProfile, 
   UserProfile,
   Test,
  } from "./screen";

import useAuth from "./hooks/useAuth";
import { loginAuth, signUpAuth, loginCheck } from "./hooks/auth";
import { CustomThemeProvider } from "./screen/profile";

const App = () => {
  const history = useHistory();
  // const [loggedIn, setLoggedIn] = useState(false);
  // const [user, setUser] = useState([
  //   {
  //     social: {},
  //   },
  // ]);
  // const loginNow = async () => {
  //   try {
  //     const email = prompt("Please enter your email");
  //     await loginAuth(email);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  //if (auth.loading || auth.loggingIn || auth.loggingOut) {
  //  return "Loading......";
  //}


  function handleSubmitSignIn(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const fn = event.target.firstName.value;
    const ln = event.target.lastName.value;
    signUpAuth(email, fn, ln);
  }

  function handleSubmitLogin(event) {
    event.preventDefault();
    const email = event.target.email.value;
    loginAuth(email);
  }

  // const updateUser = (user) => {
  //   const id = v4();
  //   setUser((previousUser) => {
  //     const currentUser = {
  //       ...user,
  //       id,
  //     };
  //     return [currentUser, ...previousUser];
  //   });
  //   history.push(`'/Ueserrofile/${id}`);
  // };

  return (
    <div >
      {/* {auth.loggedIn ? (
        <div>
          You are logged-in.
          <br />
          <button onClick={() => auth.logout()}>Logout</button>
        </div>
      ) : (
        <div>
          <button onClick={loginNow}>Login Now</button>
        </div>
      )} */}
      <CssBaseline />
      <Links />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Login">
          {loginCheck ? <Redirect to="/UserProfile" /> : <Login handleSubmit={handleSubmitLogin} />}
        </Route>
        <Route exact path="/signup">
          {loginCheck ? <Newsfeed /> : <SignUp handleSubmit={handleSubmitSignIn} />}
        </Route>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/Inbox">{loginCheck ? <Inbox /> : <Redirect to="/Login" />}</Route>
        <Route path="/Newsfeed">{loginCheck ? <Newsfeed /> : <Redirect to="/Login" />}</Route>
        <Route path="/UserProfile"  >
          {loginCheck ? <CustomThemeProvider><UserProfile  /></CustomThemeProvider> : <Redirect to="/Login" />}
        </Route>

        <Route
          path="/NewProfile"
          // render={(props) => <NewProfile{...props} updateUser={updateUser} />}
        >
          <NewProfile />
          {/* {loggedIn ? <NewProfile handleChange={handleChange} updateUser={updateUser} /> : <Redirect to="/Login" />} */}
          .{" "}
        </Route>
        <Route>
          <Test />
        </Route>
        {/* <Route path="/sidebar" component={Sidebar}/> */}
        <Route path="*">
          <h1>404 Not Found</h1>
        </Route>
      </Switch>
      {/* {location.pathname !== './' 
     && location.pathname !== './login' 
     && location.pathname !== './signup'
     && <NavBar />} */}
      {/* <NavBar/> */}
    </div>
  );
};

export default withRouter(App);


// export default function withRouter(App) {
//   return <Card />;
// }
