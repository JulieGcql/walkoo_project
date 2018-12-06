import React, { Component } from 'react';
import './Accueil.scss';


export default class Accueil extends Component {
  render() {
    return (
      <div class="containerAnim">

        <div className="Text1 ">

              <div className="first">Le bon contenu</div>
              <div className="second">Au bon endroit</div>
              <div className="third">Au bon moment</div>
        </div>

        <div className="secondContainer">

          <p className="Text2">Walkoo combine la géolocalisation et les sciences du comportement pour renforcer l'engagement de l'utilisateur en maîtrisant le sens du contexte</p>
          <p className="Bouton">Demander une Demo</p>
        </div>


      </div>


    )
  }
}










