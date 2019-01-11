import React, { Component } from 'react'
import Slider from "react-slick";
import "./Realisations.scss";
// import  realisations from '.  realisations.json';
import axios from 'axios';




export default class Realisations extends Component {
 

    state={
      realisations: [],
      sectionRealisation:[],
  };


  componentDidMount = () => {
    this.getSectionRealisation();
    this.getRealisation()
  };

  getRealisation = () => {
    axios.get('/realisation')
        .then((res) => {
          this.setState({realisations: res.data.realisations})
        })
        .catch((err) => console.log("Erreur lors de l'obtention des realisations"));
  };

  getSectionRealisation = () => {
    axios.get('/section-realisation')
        .then((res) => {
          console.log("section-realisation",res)
          this.setState({sectionRealisation : res.data.realisations[0]})
        })
        .catch((err) => console.log(err))
  };



  render() {
     /* console.log("state-section-realisation",this.state.sectionRealisation.backgroundImage.url);*/


    const settings = {
      dots: true,
      arrows: false,
      useCSS: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      rows: 2,
      adaptiveHeight: true,
      // slidesPerRow: 2
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,

          }
        }
      ]

    };
  if(this.state.sectionRealisation.backgroundImage){

    return (

      <div className="realisations_container" id="realisations" style={{backgroundImage:`url(${this.state.sectionRealisation.backgroundImage.url})`}}>
        <h1>Réalisations et Projet</h1>
        <div className="case_container">
          <Slider {...settings} >
            
            {
              this.state.realisations.map((realisation, index) => { 
                return(
                <div className="case" key={index}>
                  <h6>{realisation.title}</h6>
                  <div className="text">
                    <p>{realisation.description}</p> 
                  </div>
                  {
                    realisation.url &&
                        <a href={realisation.url} target="_blank">
                          <img src={require('./more.png')} alt={"Lien"}/>
                        </a>
                  }
                </div>
                )
              }) 
            } 
            
          </Slider>
        </div>
      </div>
    );
  } else {
        return null
  }

  }
}

