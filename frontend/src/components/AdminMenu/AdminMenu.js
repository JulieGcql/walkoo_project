import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './AdminMenu.scss'

export default class AdminMenu extends Component {
  render() {
    return (
      <div className="MenuAdmin">
        
        <NavLink to="/admin/home">
        <button className="ButtonMenuAdmin">
          <i className="fas fa-home"></i>
          <h5>Accueil</h5>
        </button>
        </NavLink>

        <button className="ButtonMenuAdmin">
          <i className="far fa-newspaper"></i>
          <h5>Articles</h5>
        </button>

        <button className="ButtonMenuAdmin">
          <i className="far fa-image"></i>
          <h5>Médias</h5>
        </button>

        <button className="ButtonMenuAdmin">
          <i className="far fa-chart-bar"></i>
          <h5>Statistiques</h5>
        </button>

        <NavLink to="/admin/contacts">
        <button className="ButtonMenuAdmin">
          <i className="fas fa-users"></i>
          <h5>Contacts</h5>
        </button>
        </NavLink>

        <button className="ButtonMenuAdmin">
          <i className="fab fa-whmcs"></i>
          <h5>Configuration</h5>
        </button>

      </div>
    )
  }
}
