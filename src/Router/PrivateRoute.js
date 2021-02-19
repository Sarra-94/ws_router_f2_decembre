import React from "react";
import { Redirect, Route } from "react-router-dom";
const PrivateRoute = ({ component: Component, history, location, ...rest }) => {
  console.log(history);
  console.log(location);
  if (location.state.isAuth) {
    return <Route component={Component} {...rest} />;
  }
  return history.push("/");
};

export default PrivateRoute;
