import React from 'react';
import './NavDesktop.scss'
import Logo from '../pictures/logo_small.png';
import DrawerToggleButton from '../DrawerToggleButton/DrawerToggleButton';

// COMPUTER NAVBAR 

const NavDesktop = props => (

  <div className="Navbar">
  
    <div className="Logo">
      <a href='/#home'>
      <i className="fas fa-map-marker-alt"></i>
      <img src={Logo} className="Logo_Walkoo" alt="Logo Walkoo"/>
      </a>
    </div>
    <div className="Navbar-toggle-button">
      <DrawerToggleButton click={props.drawerClickHandler}/>
    </div>
    
    <div className="NavLinks">
      <ul>
        <li><a href="/#expertise">Expertise</a></li>
        <li><a href="/#technologie">Technologie</a></li>
        <li><a href="/#secteurs">Secteurs</a></li>
        <li><a href="/#realisations">Réalisations</a></li>
        <li><a href="/#contact" className="ContactLink">Contact</a></li>
      </ul>
    </div>
  </div>

)

export default NavDesktop;

