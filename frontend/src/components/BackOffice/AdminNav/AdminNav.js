import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logOutAction } from '../../../store/actions/logOut'
import Logo from './pictures/logo_small.png';
import { Redirect, withRouter, NavLink } from 'react-router-dom'
import "./AdminNav.scss"

export class AdminNav extends Component {
  
  logOut = () => {
    this.props.logOutAction()
  }

  render(){

    return (
      <div className="NavbarAdmin">

        <div className="LogoAdmin">
          <i className="fas fa-map-marker-alt"></i>
          <img src={Logo} className="Logo_WalkooAdmin" alt="Logo Walkoo"/>
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
