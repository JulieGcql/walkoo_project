import React from 'react';
import './SideDrawer.scss'
import Expertise from '../../Expertise/Expertise';
import Technologie from '../../Technologie/Technologie';
import Secteurs from '../../Secteurs/Secteurs';
import Realisations from '../../Realisations/Realisations';
import Contact from '../../Contact/Contact';

// MOBILE MENU

const SideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (

    <nav className={drawerClasses}>

      <div className="Cross-button" onClick={props.close}>
        <i className="fas fa-times"></i>
      </div>

      <ul>
        <li><a href={Expertise}>Expertise</a></li>
          <li><a href={Technologie}>Technologie</a></li>
          <li><a href={Secteurs}>Secteurs</a></li>
          <li><a href={Realisations}>Réalisations</a></li>
          <li><a href={Contact} className="ContactLink">Contact</a></li>
        </ul>

    </nav>
  )
}


export default SideDrawer;