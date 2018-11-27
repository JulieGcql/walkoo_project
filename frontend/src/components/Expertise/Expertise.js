import React, { Component } from 'react'
import './Expertise.scss';

export default class Expertise extends Component {
  render() {
    return (
      <div className="expertContainer">
        <div className="expertTitle">
          <h1>Expertise</h1>
        </div>
        <div className="expertDescription">
          <p className="expertParagraph">À l’ère du Mobile first, la maîtrise de l’approche contextuelle est décisive pour renforcer efficacement l’engagement d’une audience.</p>
          <p>Walkoo propose cette nouvelle approche, fondée sur les sciences du comportement et les dernières technologies de géolocalisation.</p>
            <hr />
        </div>
        <div className="expertSubtitle">
          <h3>Walkoo conçoit des solutions intégrées qui associent la localisation de l’utilisateur dans son environnement (indoor & outdoor) et la scénarisation de notifications contextuelles pour l’informer ou l’assister en temps réel.</h3>
        </div>
        <div className="expertImage">
          <img src={require('./Illustration.png')} alt="Illustration" className="expertImage"/>
        </div>        
      </div>
    )
  }
}
