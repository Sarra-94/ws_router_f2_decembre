import React from "react";

import { Route, Switch } from "react-router-dom";

import Contacts from "./Pages/Contacts";
import Errors from "./Pages/Errors";
import SignIn from "./Pages/SignIn/SignIn";
import Home from "./Pages/Home";

import "./App.css";
import PrivateRoute from "./Router/PrivateRoute";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Contacts} />
        <Route path="/profile" component={Profile} />
        <Route path="/signin" component={SignIn} />
        <PrivateRoute path="/dashbord" component={Home} />
        <Route path="/*" component={Errors} />
      </Switch>
    </div>
  );
}

export default App;
