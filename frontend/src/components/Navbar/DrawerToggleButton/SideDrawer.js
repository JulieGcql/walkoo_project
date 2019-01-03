import React from 'react';
import './SideDrawer.scss'
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
          <li><a 
          onClick={props.close} 
          href="/#expertise">Expertise</a></li>
          <li><a 
          onClick={props.close} 
          href="/#technologie">Technologie</a></li>
          <li><a 
          onClick={props.close} 
          href="/#secteurs">Secteurs</a></li>
          <li><a 
          onClick={props.close} 
          href="/#realisations">Réalisations</a></li>
          <li><a 
          onClick={props.close} 
          href="/#contact" 
          className="ContactLink">Contact</a></li>
        </ul>

    </nav>
  )
}


export default SideDrawer;