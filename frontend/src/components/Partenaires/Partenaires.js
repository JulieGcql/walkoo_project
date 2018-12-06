import React, { Component } from "react";
import Slider from "react-slick";
import './Logos/commerce.png';
import './Logos/frenchtech.png';
import './Logos/impulse.png';
import './Logos/stationf.png';
import './Logos/sud.png';
import './Partenaires.scss'

export default class Partenaires extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 4000,
      cssEase: "linear",
      arrows: false,
      pauseOnHover: false,
      accessibility: false
    };
    return (
      <div className="Partenaires">
        <h1 className="titrePartenaires">Partenaires</h1>
        <Slider {...settings}>
          <div className="LogoCommerce">
            <img src={require('./Logos/commerce.png')} alt="Chambre du Commerce"/>
          </div>
          <div className="LogoFrench">
            <img src={require('./Logos/frenchtech.png')} alt="French Tech"/>
          </div>
          <div className="LogoStation">
            <img src={require('./Logos/stationf.png')} alt="Station F"/>
          </div>
          <div className="LogoSud">
            <img src={require('./Logos/sud.png')} alt="Région Sud"/>
          </div>
          <div className="LogoImpulse">
            <img src={require('./Logos/impulse.png')} alt="Impulse"/>
          </div>
        </Slider>
      </div>
    );
  }
}