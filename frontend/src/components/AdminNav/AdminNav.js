import React, { Component } from 'react'
import Logo from './pictures/logo_small.png';
import "./AdminNav.scss"

export default class AdminNav extends Component {
  render() {
    return (
      <div className="NavbarAdmin">
        {/* <button className="toggle-button-admin">
          <div className="toggle-button_line"></div>
          <div className="toggle-button_line"></div>
          <div className="toggle-button_line"></div>
        </button> */}

        <div className="LogoAdmin">
          <i className="fas fa-map-marker-alt"></i>
          <img src={Logo} className="Logo_WalkooAdmin" alt="Logo Walkoo"/>
          <h1>Administrateur</h1>
        </div>

        <button className="LogOutAdmin">
          <p>Déconnexion</p>
          <i className="fas fa-sign-out-alt"></i>
        </button>
      </div>
    )
  }
}
