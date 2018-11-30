import React, { Component } from 'react'
import SectorsData from './Secteurs.json'
import More from './pictures/more.png'
import Less from './pictures/less.png'
import './SecteursPc.scss'

export default class Secteurs extends Component {
  state = {
    currentSelected : null
  }

  render() {
    const { currentSelected } = this.state;
    return (
      <div className="SecteursContainer">

        <h1 className="SecteursTitle">Secteurs</h1>

        <div className="SecteursCards">
          {SectorsData.map((secteur, index) => { 
            return (
              <div className="SecteurCard" key={index}>

                <img className="SecteurPicto" src={secteur.media} alt={`Logo ${secteur.title}`}/>
                <h3 className="SecteurTitle">{secteur.title}</h3>

                {currentSelected === secteur.title ? 
                      
                  <div>
                    <p className="SecteurDescription">{secteur.description}</p>
                    <img className="SecteurPictoLess" src={Less} alt="Button Less" onClick={() => this.setState({currentSelected : null})
                  }/>
                  </div>

                : (<img className="SecteurPictoMore" src={More} alt="Button More" onClick={() => this.setState({currentSelected : secteur.title})}/>)
                }
              </div>
            )         
          })}
        </div>
      </div>
    )
  }
}