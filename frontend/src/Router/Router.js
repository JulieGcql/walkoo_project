import React, { Component } from 'react'
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import Website from '../Pages/Website/Website';
import PageLogin from '../Pages/Admin/PageLogin';

class Router extends Component {
  render() {
  return (

      <Switch>
        <Route exact path="/"  component={Website} />
        <Route exact path="/admin/login"  component={PageLogin} />
      </Switch>

    )
  }
}

const mapStateToProps = (state) => ({
  ...state
})


export default withRouter(connect(mapStateToProps)(Router))