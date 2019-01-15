import React, { Component } from 'react';
import './NavDesktop.scss'
import DrawerToggleButton from '../DrawerToggleButton/DrawerToggleButton';
import axios from 'axios'

// COMPUTER NAVBAR 

class NavDesktop extends Component {
  state = {
    logo: ""
  }

  componentDidMount = () => {
    this.getLogo()
  }


  getLogo = () => {
    axios.get('/tags/logo')
    .then((res) => this.setState({logo : res.data.tag.medias[0].url}))
    .catch((err) => console.log("Erreur lors de l'obtention du logo Walkoo"))
  }


  render() {
    return(

      
      <div className="Navbar">
  
        <div className="Logo">
          <a href='/#home'>
            <img src={this.state.logo} className="Logo_Walkoo" alt="Logo Walkoo"/>
          </a>
        </div>

        <div className="Navbar-toggle-button">
          <DrawerToggleButton click={this.props.drawerClickHandler}/>
        </div>
        
        <div className="NavLinks">
          <ul>
            <li><a href="/#expertise">Expertise</a></li>
            <li><a href="/#technologie">Technologie</a></li>
            <li><a href="/#secteurs">Secteurs</a></li>
            <li><a href="/#realisations">Ressources</a></li>
            <li><a href="/#contact" className="ContactLink">Contact</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default NavDesktop;

