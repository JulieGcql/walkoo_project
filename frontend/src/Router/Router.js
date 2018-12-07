import React, { Component } from 'react'
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import Website from '../Pages/Website/Website';
import Admin from '../Pages/Admin/AdminLogin';
import AdminHome from '../Pages/Admin/AdminHome';

class Router extends Component {
  render() {
  return (

        <Switch>
          <Route exact path="/"  component={Website} />
          <Route exact path="/admin/login"  component={Admin} />
          {
            this.props.authentification.user.userData.user.isAdmin && 
              <Route exact path="/admin/home" component={AdminHome}/>
          }
        </Switch>

    )
  }
}

const mapStateToProps = (state) => ({
  ...state
})


export default withRouter(connect(mapStateToProps)(Router))