import React, { Component } from 'react'
import './Expertise.scss';
import axios from 'axios'

export default class Expertise extends Component {
  state = {
    expertise : []
  }

  componentDidMount = () => {
    axios.get('/expertise/')
    .then((res) => this.setState({expertise: res.data.expertise[0]}))
    .catch((err) => {console.log(err)});
  }
  

  render() {
    console.log(this.state.expertise)
    return (
      <div className="expertContainer" id="expertise">
        <h1 className="expertTitle">Expertise</h1>
        {/* <div className="expertDescription">
          <p className="expertParagraph">À l’ère du Mobile first, la maîtrise de l’approche contextuelle est décisive pour renforcer efficacement l’engagement d’une audience.</p>
          <p>Walkoo propose cette nouvelle approche, fondée sur les sciences du comportement et les dernières technologies de géolocalisation.</p>
            <hr />
        </div>
        <div className="expertSubtitle">
          <p>Walkoo conçoit des solutions intégrées qui associent la localisation de l’utilisateur dans son environnement (indoor & outdoor) et la scénarisation de notifications contextuelles pour l’informer ou l’assister en temps réel.</p>
        </div>
        <div className="expertImage">
          <img src={require('./Illustration.png')} alt="Illustration" className="expertImage"/>
        </div>         */}
        <div dangerouslySetInnerHTML={createMarkup(this.state.expertise.paragraphOne)} className="expertDescription"></div>
        <hr/>
        <div dangerouslySetInnerHTML={createMarkup(this.state.expertise.paragraphTwo)} className="expertSubtitle"></div>
        <div className="expertImage">
          <img src={`${this.state.expertise.image.url}`} alt="Illustration"/>
        </div>   
      </div>
    )
  }
}

function createMarkup(stringyfiedHtml) {
  return { __html: stringyfiedHtml };
}
