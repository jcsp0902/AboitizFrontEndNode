import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "Modules/Login/Login";
import Test from "Modules/Customer/Dashboard";
import CreateService from 'Modules/CreateService/CreateService'

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/customer-dashboard" component={Test} exact />
        <Route path="/service-application" component={CreateService} exact />

      </Switch>
    );
  }
}

export default Routes;
