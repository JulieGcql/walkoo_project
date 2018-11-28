import React, { Component } from 'react'
import SectorsData from './Secteurs.json'
import Back from './pictures/back.png'
import Next from './pictures/next.png'
import './SecteursMobile.scss'

export default class SecteursMobile extends Component {
  state = {
    currentActive : 0
  }


  handleBackSector = () => {
    if (this.state.currentActive === 0){
      this.setState({currentActive : SectorsData.length -1})
    } else {
      this.setState({currentActive : this.state.currentActive - 1})
    }
  }
  handleNextSector = () => {
    if (this.state.currentActive === SectorsData.length -1){
      this.setState({currentActive : 0})
    } else {
      this.setState({currentActive : this.state.currentActive + 1})
    }
  }

  render() {
    const { currentActive } = this.state;
    return (
      <div className="SecteursMobileContainer">

        <h1 className="SecteursMobileTitle">Secteurs</h1>

        <div className="SecteursMobileCards">
        <img src={Back} alt="Back" className="SecteursMobileRows" onClick={() => this.handleBackSector()}/>
          {SectorsData.map((secteur, index) => 
            currentActive === index &&

                <div className="SecteurMobileCard" key={index}>

                  <img className="SecteurMobilePicto" src={secteur.media} alt={`Logo ${secteur.title}`}/>
                  <h3 className="SecteurMobileTitle">{secteur.title}</h3>
                  <p className="SecteurMobileDescription">{secteur.description}</p>
                </div>         
            
          )}
        <img src={Next} alt="Next" className="SecteursMobileRows" onClick={() => this.handleNextSector()}/>
        </div>
      </div>
    )
  }
}

