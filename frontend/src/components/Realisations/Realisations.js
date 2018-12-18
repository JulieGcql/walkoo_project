import React, { Component } from 'react'
import Slider from "react-slick";
import "./Realisations.scss"
import datas from './datas.json'




export default class Realisations extends Component {
 

    state={
      datas: datas,
      // realisations:[],
   
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

    // getRealisations = () => {
    //   axios.get('/realisation')
    //   .then((res) => {
    //     console.log(res.data)
    //     this.setState({realisations: res.data.realisations})
    //   })
    //   .catch((err) => console.log("Erreur lors de l'obtention des realisations"))
    // }
    

    return (
      <div className="realisations_container">
        <h1>Réalisations et Projet</h1>
        <div className="case_container">
          <Slider {...settings} >
            
            {
              this.state.datas.map((data, index) => { 
                return(
                <div className="case" key={index}>
                  <h6>{data.title}</h6>
                  <div className="text">
                    <p>{data.description}</p>
                  </div>
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
