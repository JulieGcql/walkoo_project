import React, { Component } from 'react';
import {demoAction} from '../../store/actions/demo'
import './Accueil.scss';
import { connect } from 'react-redux'

export class Accueil extends Component {
  render() {
    return (
      <div class="containerAnim" id="home" style={{scrollMarginTop: '800px'}}>

        <div className="Text1 ">
              <div className="first">Le bon contenu</div>
              <div className="second">Au bon endroit</div>
              <div className="third">Au bon moment</div>
        </div>

        <div className="secondContainer">

          <p className="Text2">Walkoo combine la géolocalisation et les sciences du comportement pour renforcer l'engagement de l'utilisateur en maîtrisant le sens du contexte</p>
          <button 
            className="btn btn-warning Bouton"
            onClick={() => this.props.demoAction()}
            >
              <a href="/#contact">Demander une Démo</a>
          </button> 
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = {
  demoAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Accueil)











