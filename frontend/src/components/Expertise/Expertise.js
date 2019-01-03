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
    console.log("jhcjhjd", this.state.expertise)
    const imgUrl = this.state.expertise.image ? this.state.expertise.image.url : null
    return (
      <div className="expertContainer" id="expertise">
        <h1 className="expertTitle">Expertise</h1>
        <div dangerouslySetInnerHTML={createMarkup(this.state.expertise.paragraphOne)} className="expertDescription"></div>
        <div dangerouslySetInnerHTML={createMarkup(this.state.expertise.paragraphTwo)} className="expertSubtitle"></div>
        <div className="expertImage">
          <img src={imgUrl} alt="Illustration"/>
        </div>   
      </div>
    )
  }
}

function createMarkup(stringyfiedHtml) {
  return { __html: stringyfiedHtml };
}
