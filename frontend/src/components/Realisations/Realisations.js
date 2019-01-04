import React, { Component } from 'react'
import Slider from "react-slick";
import "./Realisations.scss";
// import  realisations from '.  realisations.json';
import axios from 'axios';




export default class Realisations extends Component {
 

    state={
      realisations: []
    
   
  }


    
  componentDidMount = () => {
    axios.get('/realisation')
    .then((res) => {
      console.log(res.data)
      this.setState({realisations: res.data.realisations})
    })
    .catch((err) => console.log("Erreur lors de l'obtention des realisations"))
  }
  

  render() {

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

    return (
      <div className="realisations_container" id="realisations">
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
  }
}

