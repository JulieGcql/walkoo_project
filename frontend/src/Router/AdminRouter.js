import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PageHome from '../Pages/Admin/PageHome';
import PageArticles from '../Pages/Admin/PageArticle'
import PageMedias from '../Pages/Admin/PageMedia'
import PageStatistiques from '../Pages/Admin/PageStatistique'
import PageContacts from '../Pages/Admin/PageContact'
import PageConfigurations from '../Pages/Admin/PageConfiguration'


export class AdminRouter extends Component {

  render() {
    return (
      <div>

        {/* {this.props.authentification.user.userData.user.isAdmin &&  */}

          <Switch>
            <Route exact path="/admin/home" component={PageHome}/>
            <Route exact path="/admin/articles" component={PageArticles}/>
            <Route exact path="/admin/medias" component={PageMedias} />
            <Route exact path="/admin/statistiques" component={PageStatistiques} />
            <Route exact path="/admin/contacts" component={PageContacts} />
            <Route exact path="/admin/configuration" component={PageConfigurations} />

          </Switch>
        {/* } */}

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state
})


export default withRouter(connect(mapStateToProps)(AdminRouter))
