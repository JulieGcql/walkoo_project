import React from 'react'
import { NavLink } from 'react-router-dom'
import './AdminMenu.scss'


const AdminMenu = () => {
  return (
    <div className="MenuAdmin">
        
      <NavLink to="/admin/home">
        <button className="ButtonMenuAdmin">
          <i className="fas fa-home"></i>
          <h5>Accueil</h5>
        </button>
      </NavLink>

      <NavLink to="/admin/articles">
        <button className="ButtonMenuAdmin">
          <i className="far fa-newspaper"></i>
          <h5>Articles</h5>
        </button>
      </NavLink>

      <NavLink to="/admin/medias">
        <button className="ButtonMenuAdmin">
          <i className="far fa-image"></i>
          <h5>Galerie</h5>
        </button>
      </NavLink>

      <NavLink to="/admin/contacts">
        <button className="ButtonMenuAdmin">
          <i className="fas fa-users"></i>
          <h5>Contacts</h5>
        </button>
      </NavLink>

      <NavLink to="/admin/configuration">
        <button className="ButtonMenuAdmin">
          <i className="fab fa-whmcs"></i>
          <h5>Configurations</h5>
        </button>
      </NavLink>

    </div>
  )
}

export default AdminMenu

