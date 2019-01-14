import React, { Component } from 'react'
import './AdminArticles.scss'
import Accueil from './Accueil/Accueil';
import Expertise from './Expertise/Expertise';
import Technologie from './Technologie/Technologie';
import Secteurs from './Secteurs/Secteurs';
import Realisations from './Realisations/Realisations';
import MediasSalon from './MediasSalons/MediasSalon';

export default class AdminArticles extends Component {
  state = {
    accueil: "active show",
    expertise: "",
    technologie:"",
    secteurs:"",
    realisations:"",
    medias_salons:""
  }

  handleSubmit = (e) => {
      this.setState({accueil: "", expertise:"",technologie:"",secteurs:"",realisations:"",medias_salons:""})
      this.setState({[e.target.name]: "active show"})
  }

  render() {
    const { handleSubmit, state: { accueil, expertise, technologie, secteurs,realisations,medias_salons} } = this;
    return (
      <div className="ArticlesAdmin">

        <h1>Articles</h1>

        <ul className="nav nav-tabs">

          <li className="nav-item">
            <a 
            className={`nav-link ${accueil}`} 
            onClick={(e) => handleSubmit(e)} 
            data-toggle="tab" 
            name="accueil"
            href="#1"
            >Accueil
            </a>
          </li>

          <li className="nav-item">
            <a 
            className={`nav-link ${expertise}`}
            onClick={(e) => handleSubmit(e)} 
            data-toggle="tab" 
            name="expertise"
            href="#2"
            >Expertise
            </a> 
          </li>

          <li className="nav-item">
            <a 
            className={`nav-link ${technologie}`}
            onClick={(e) => handleSubmit(e)}  
            data-toggle="tab" 
            name="technologie"
            href="#3"
            >Technologie
            </a>
          </li>

          <li className="nav-item">
            <a 
            className={`nav-link ${secteurs}`}
            onClick={(e) => handleSubmit(e)}   
            data-toggle="tab" 
            name="secteurs"
            href="#4"
            >Secteurs
            </a>
          </li>

          <li className="nav-item">
            <a 
            className={`nav-link ${realisations}`}
            onClick={(e) => handleSubmit(e)}  
            data-toggle="tab" 
            name="realisations"
            href="#5"
            >Ressources
            </a>
          </li>

          <li className="nav-item">
            <a
            className={`nav-link ${medias_salons}`}
            onClick={(e) => handleSubmit(e)}  
            data-toggle="tab" 
            name="medias_salons"
            href="#6"
            >Salons & Médias
            </a>
          </li>

        </ul>


        <div id="myTabContent" className="tab-content">

          <div 
          className={`tab-pane fade ${accueil}`}
          id="accueil">
            <Accueil/>
          </div>

          <div 
          className={`tab-pane fade ${expertise}`}
          id="expertise">
            <Expertise/>
          </div>

          <div 
          className={`tab-pane fade ${technologie}`} 
          id="technologie">
            <Technologie/>
          </div>

          <div 
          className={`tab-pane fade ${secteurs}`} 
          id="secteurs">
            <Secteurs/>
          </div>

          <div 
          className={`tab-pane fade ${realisations}`} 
          id="realisations">
            <Realisations/>
          </div>

          <div 
          className={`tab-pane fade ${medias_salons}`} 
          id="medias_salons">
            <MediasSalon/>
          </div>

        </div>

      </div>
    )
  }
}
