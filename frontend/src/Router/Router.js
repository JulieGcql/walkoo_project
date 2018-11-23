import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Website from '../Pages/Website/Website';
import Admin from '../Pages/Admin/Admin';

export default class Router extends Component {
  render() {
  return (
    
      <BrowserRouter>

        <Switch>
          <Route exact path="/"  component={Website} />
          <Route exact path="/admin"  component={Admin} />
        </Switch>

      </BrowserRouter>

    )
  }
}
