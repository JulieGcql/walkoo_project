import React, { Component } from 'react';
import "./Footer.scss";
import FooterModal from './FooterModal';


export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer_container">
          <div className="footer_menu">
          <p>WALKOO</p>
            <ul>
              <li>Expertise</li>
              <li>Technologie</li>
              <li>Secteurs</li>
              <li>Réalisations</li>
            </ul>
          </div>
          <div className="footer_app_logo">
            <img src={require('./Pictures/app-store.png')} alt="logo app store"/>
            <img src={require('./Pictures/google_play.png')} alt="logo google play"/>
          </div>
          <div className="footer_rgpd">
            <FooterModal/>
            {/* <p>Politique de Confidentialité et Conditions Générales d’Utilisation</p> */}
            <p className="walkoo_c"> © WALKOO 2018 </p>
          </div>
          <div className="footer_social_icon">
            <img src={require('./Pictures/twitter.png')} alt="logo twitter"/>
            <img src={require('./Pictures/linkedin.png')} alt="logo linkedin"/>
          </div>
        </div>
      </div>
    )
  }
}
