import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "Modules/Login/Login";
import Test from "Modules/Customer/Dashboard";
import CreateService from 'Modules/CreateService/CreateService'
import NotificationCenter from 'Modules/NotificationCenter/NotificationCenter'

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/customer-dashboard" component={Test} exact />
        <Route path="/service-application" component={CreateService} exact />
        <Route path="/notification-center" component={NotificationCenter} exact />

      </Switch>
    );
  }
}

export default Routes;
