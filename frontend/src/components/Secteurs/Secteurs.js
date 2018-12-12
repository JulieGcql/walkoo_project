import React, { Component } from 'react'
import SecteursMobile from './SecteursMobile';
import SecteursPc from './SecteursPc';
import Media from 'react-media'
import Axios from 'axios'


class Secteurs extends Component {
  state = {
    sectors : []
  }

  componentDidMount = () => {
    Axios.get('/sectors/')
    .then((res) => { console.log(res.data.sectors); this.setState({sectors : res.data.sectors})})
    .catch((err) => { console.log(err)});
  }

  render() {
    return (
      <div>
        <Media query="(max-width: 425px)">
          {matches =>
            matches ? (
              <SecteursMobile sectors={this.state.sectors}/>
            ) : (
              <SecteursPc sectors={this.state.sectors}/>
            )
          }
        </Media>
      </div>
    )
  }
}

export default Secteurs;