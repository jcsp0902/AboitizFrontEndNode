import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "Modules/Home/Home";
import LogIn from "Modules/Login/Login";
import Test from "Modules/Customer/Dashboard";
import CreateService from 'Modules/CreateService/CreateService'

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={LogIn} exact />
        <Route path="/customer-dashboard" component={Test} exact />
        <Route path="/service-application" component={CreateService} exact />
        <Route path="/home" component={Home} exact />

      </Switch>
    );
  }
}

export default Routes;
