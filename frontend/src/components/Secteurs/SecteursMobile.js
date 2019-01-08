import React, { Component } from 'react'
import Slider from 'react-slick'
import './SecteursMobile.scss'

export default class SecteursMobile extends Component {
  
  render() {
    const settings = {
      dots: true,
      arrows: false,
    };
    return (
      <div className="SecteursMobileContainer">

        <h1 className="SecteursMobileTitle">Secteurs</h1>

        <div className="SecteursMobileCards">

        <Slider {...settings}>

          {this.props.sectors.map((secteur, index) => {
            return (
              <div className="SecteurMobileCard" key={index}>

                <img className="SecteurMobilePicto" src={`${secteur.picto.url}`} alt={`Logo ${secteur.picto.name}`}/>
                <h3 className="SecteurMobileTitle">{secteur.title}</h3>
                <div className="SecteurMobileDescription" dangerouslySetInnerHTML={createMarkup (secteur.description)}></div>
                
              </div>         
            )
          })}

          </Slider>
        </div>
      </div>
    )
  }
}

function  createMarkup ( stringyfiedHtml ) {
  return { __html :  stringyfiedHtml };
}