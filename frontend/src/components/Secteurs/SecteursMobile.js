import React, { Component } from 'react'
import SectorsData from './Secteurs.json'
import Slider from 'react-slick'
import './SecteursMobile.scss'

export default class SecteursMobile extends Component {
  state = {
    sectors : SectorsData
  }

  render() {
    const { sectors } = this.state;
    const settings = {
      dots: true,
      arrows: false,
    };
    return (
      <div className="SecteursMobileContainer">

        <h1 className="SecteursMobileTitle">Secteurs</h1>

        <div className="SecteursMobileCards">

        <Slider {...settings}>

          {sectors.map((secteur, index) => {
            return (
              <div className="SecteurMobileCard" key={index}>

                <img className="SecteurMobilePicto" src={secteur.media} alt={`Logo ${secteur.title}`}/>
                <h3 className="SecteurMobileTitle">{secteur.title}</h3>
                <p className="SecteurMobileDescription">{secteur.description}</p>
                
              </div>         
            )
          })}

          </Slider>
        </div>
      </div>
    )
  }
}

