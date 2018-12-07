import React, { Component } from 'react'
import NavDesktop from './NavDesktop/NavDesktop';
import SideDrawer from './DrawerToggleButton/SideDrawer'
import Backdrop from './Backdrop/Backdrop'

// MOBILE/COMPUTER NAVBAR

export default class Navbar extends Component {
  state = {
    sideDrawerOpen : false
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen : !prevState.sideDrawerOpen}
    })
  } 

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
  }
  
  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }
    return (
      <div>
        <NavDesktop drawerClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer 
          show={this.state.sideDrawerOpen}
          close={this.backdropClickHandler}
        />        
        {backdrop}
      </div>
    )
  }
}
