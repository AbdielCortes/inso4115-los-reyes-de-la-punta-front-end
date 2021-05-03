import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import Guard from "./GuardedRoute";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import Lawyer from "../components/Profile/Lawyer";

class Routes extends Component {
  render() {
    return (
      // This component manages the paths to the different screens
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/signup" exact component={SignUp}></Route>
          <Route path="/attorney-profile" exac component={Lawyer}></Route>
        </Switch>
      </Router>
    );
  }
}

export default Routes;
