import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Expertise from '../../components/Expertise/Expertise'
import Accueil from '../../components/Accueil/Accueil'

export default class Website extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Expertise/>
        <Accueil/>
      </div>
    )
  }
}
