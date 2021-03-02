import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import Guard from "./GuardedRoute";
import Home from "../components/Home/Home";

class Routes extends Component {
  render() {
    return (
      // This component manages the paths to the different screens
      <Router history={history}>
        <Switch>
          <Guard path="/" component={Home}></Guard>
        </Switch>
      </Router>
    );
  }
}

export default Routes;
