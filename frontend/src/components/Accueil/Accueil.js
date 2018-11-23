import React, { Component } from 'react';
import'./Accueil.scss';


export default class Accueil extends Component {
  render() {
    return (
      <div className="backgroundAccueil">
          <div className="opacityOrange">
              <p>Le bon contenu au bon endroit au bon moment</p>

              <p>Walkoo combine la géolocalisation et les sciences du comportement 
                pour renforcer l'engagement de l'utilisateur en maîtrisant le sens 
                du contexte</p>

              <button>Demander une Demo</button>
              
          
          </div>
        
      </div>
    )
  }
}
