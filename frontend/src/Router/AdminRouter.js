import React, { Component } from 'react'
import { connect } from 'react-redux'
import AdminContact from '../Pages/Admin/AdminContact'
import { Switch, Route, withRouter } from 'react-router-dom'


export class AdminRouter extends Component {

  render() {
    return (
      <div>

        <Switch>
          {
            this.props.authentification.user.userData.user.isAdmin && 
              <Route exact path="/admin/contacts"  component={AdminContact} />
              // <Route exact path="/admin/Articles" component={AdminArticles}/>
          }
        </Switch>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state
})


export default withRouter(connect(mapStateToProps)(AdminRouter))
