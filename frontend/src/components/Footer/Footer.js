import React, { Component } from 'react';
import "./Footer.scss";
import FooterModal from './FooterModal';
import Axios from 'axios';


export default class Footer extends Component {
  state = {
    configurations : []
  }

  componentDidMount() {
    this.getConfiguration()
  }

  getConfiguration = () => {
    Axios.get('/configurations')
    .then((res) => this.setState({configurations : res.data.configurations[0]}))
    .catch((err) => console.log(err))
  }

  render() {
    return (
      <div>
        <div className="footer_container">
          <div className="footer_menu">
          {/*{this.state.configurations.logo &&
            <a href='/#home'>
              <img src={this.state.configurations.logo.url} alt="Logo Walkoo" className='LogoFooter'/>
            </a>
          }*/}
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
            {/*<FooterModal config={this.state.configurations.rgpd}/>*/}
            <p className="walkoo_c"> © WALKOO 2018 </p>
          </div>
          <div className="footer_social_icon">
           {/* <a href={this.state.configurations.twitter} rel="noopener noreferrer" target="_blank">
              <img src={require('./Pictures/twitter.png')} alt="logo twitter"/>
            </a>
            <a href={this.state.configurations.linkedin} rel="noopener noreferrer" target="_blank">
              <img src={require('./Pictures/linkedin.png')} alt="logo linkedin"/>
            </a>*/}
          </div>
        </div>
      </div>
    )
  }
}
