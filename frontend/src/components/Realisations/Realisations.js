import React, { Component } from 'react'
import Slider from "react-slick";
import "./Realisations.scss"
import datas from './datas.json'


export default class Realisations extends Component {
 

    state={
      datas: datas
   
  }

  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      rows: 2,
      // slidesPerRow: 2
 
    };
    return (
      <div className="realisations_container">
        <h1>Réalisations et Projet</h1>
        <div className="case_container">
          <Slider {...settings}>
            
            {
              this.state.datas.map((data) => { 
                return(
                <div className="case">
                  <h3>{data.title}</h3>
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
