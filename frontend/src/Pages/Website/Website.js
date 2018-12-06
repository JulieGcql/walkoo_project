import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Expertise from '../../components/Expertise/Expertise'
import Accueil from '../../components/Accueil/Accueil'
import MediasSalons from '../../components/MediasSalons/MediasSalons'

export default class Website extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Expertise/>
        <Accueil/>
        <MediasSalons/>
      </div>
    )
  }
}
