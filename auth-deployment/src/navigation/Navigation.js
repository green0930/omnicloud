import React from "react";
import { Switch } from "react-router-dom";
import ConnectedRoute from "./ConnectedRoute";

import NotFound from "../screens/NotFound";
import {
    Home,
    Newsfeed,
    NewProfile,
    UserProfile,
    Inbox,
    Login,
} from '../screen'


export default function Navigation() {
  return (
    <Switch>
      <ConnectedRoute exact path="/" redirectIfAuthenticated component={Home} />
      <ConnectedRoute exact isProtected path="/newsfeed" component={Newsfeed} />
      <ConnectedRoute exact isProtected path="/newProfile" component={NewProfile} />
      <ConnectedRoute exact isProtected path="/userProfile" component={UserProfile} />
      <ConnectedRoute exact isProtected path="/inbox" component={Inbox} />
      <ConnectedRoute exact isProtected path="/login" component={Login} />
      <ConnectedRoute path="*" component={NotFound} />
    </Switch>
  );
}
