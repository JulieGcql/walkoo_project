import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logOutAction } from '../../../store/actions/logOut'
import { withRouter, NavLink } from 'react-router-dom'
import "./AdminNav.scss"
import Axios from 'axios';

export class AdminNav extends Component {
  state = {
    logo : ""
  }

  componentDidMount() {
    this.getLogo()
  }

  getLogo = () => {
    Axios.get('/tags/logo')
    .then((res) => this.setState({logo: res.data.tag.medias[0].url}))
    .catch((err) => console.log("Erreur lors de l'obtention du logo"))
  }
  
  logOut = () => {
    delete Axios.default.headers.common['Authorization']
    this.props.logOutAction()
  }

  render(){

    return (
      <div className="NavbarAdmin">

        <div className="LogoAdmin">
          <img src={this.state.logo} className="Logo_WalkooAdmin" alt="Logo Walkoo"/>
          <h1>Administrateur</h1>
        </div>

        <NavLink 
        to="/"
        onClick={() => this.logOut()}
        className="LogOutAdmin">
          <p>Déconnexion</p>
          <i className="fas fa-sign-out-alt"></i>
        </NavLink>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = {
  logOutAction
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminNav))
