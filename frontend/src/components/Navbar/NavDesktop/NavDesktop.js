import React from 'react';
import './NavDesktop.scss'
import Logo from '../pictures/logo_small.png';
import Expertise from '../../Expertise/Expertise';
import Technologie from '../../Technologie/Technologie';
import Secteurs from '../../Secteurs/Secteurs';
import Realisations from '../../Realisations/Realisations';
import Contact from '../../Contact/Contact';
import DrawerToggleButton from '../DrawerToggleButton/DrawerToggleButton';

// COMPUTER NAVBAR 

const NavDesktop = props => (

  <div className="Navbar">
  
    <div className="Logo">
      <i className="fas fa-map-marker-alt"></i>
      <img src={Logo} className="Logo_Walkoo" alt="Logo Walkoo"/>
    </div>
    <div className="Navbar-toggle-button">
      <DrawerToggleButton click={props.drawerClickHandler}/>
    </div>
    
    <div className="NavLinks">
      <ul>
        <li><a href={Expertise}>Expertise</a></li>
        <li><a href={Technologie}>Technologie</a></li>
        <li><a href={Secteurs}>Secteurs</a></li>
        <li><a href={Realisations}>Réalisations</a></li>
        <li><a href={Contact} className="ContactLink">Contact</a></li>
      </ul>
    </div>
  </div>

)

export default NavDesktop;

