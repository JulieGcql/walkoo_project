import React, { Component } from 'react';
import './MediasSalons.scss';
import MediaData from './Media.json';
import SalonsData from './Salons.json';
export default class Medias extends Component {
  render() {
    return (

      <div className="grid-container">

        
          
        
        <div className="ListeSalons">
        <h1 className="msTitle">Salons</h1>
          {SalonsData.map((salon, index) => {
            return (
              <p className="media" key={index}>{salon.salon}</p>)
          })}

        </div>

        
         

          <div className="ListeMedia">
          <h1 className="msTitle" >Médias</h1>
            {MediaData.map((media, index) => {
              return (
                <p className="media" key={index}>{media.media}</p>)
            })}


          </div>

        </div>

      


    )
  }
}
