import React, { Component } from 'react'
import './AdminAccueil.scss'

export default class AdminAccueil extends Component {
  render() {
    return (
      <div className="AccueilAdmin">
        <h1>Accueil</h1>
        <h1 className="hello">Bonjour Walkoo !</h1>
      </div>
    )
  }
}
