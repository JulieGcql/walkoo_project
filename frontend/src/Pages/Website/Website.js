import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Expertise from '../../components/Expertise/Expertise'
import Technologie from '../../components/Technologie/Technologie'

export default class Website extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Expertise/>
        <Technologie/>
      </div>
    )
  }
}
