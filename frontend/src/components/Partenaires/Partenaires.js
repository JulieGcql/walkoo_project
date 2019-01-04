import React, { Component } from "react";
import Slider from "react-slick";
import './Logos/commerce.png';
import './Logos/frenchtech.png';
import './Logos/impulse.png';
import './Logos/stationf.png';
import './Logos/sud.png';
import './Partenaires.scss'
import axios from 'axios';

export default class Partenaires extends Component {

  state = {
    partenaires:[]

  };

  componentDidMount = () => {
      axios.get('/tags/partenaire')
      .then((res) => {
        console.log('data', res.data)
        this.setState({partenaires: res.data.tag.medias})
      })
      .catch((err) => console.log("Erreur lors de l'obtention des partenaires"))
    };

  render() {
    console.log('state', this.state.partenaires)
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
      accessibility: false,
      draggable: false
    };
    return (
      <div className="Partenaires">
        <h1 className="titrePartenaires">Partenaires</h1>
        <div className="sliderPartenaires">
        <Slider {...settings}>
          {this.state.partenaires.map((partenaire, index) => {
            return(
              <img className="LogosPartenaires" src ={`${partenaire.url}`} alt={`${partenaire.name}`} key={index}/>
            )
          })}
        </Slider>
        </div>
      </div>
    );
  }
}