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
    .then((res) => this.setState({sectors : res.data.sectors}))
    .catch((err) => { console.log(err)});
  }

  render() {
    console.log(this.state)
    return (
      <Media query="(max-width: 425px)">
          {matches =>
            matches ? (
              <div id="secteurs" style={{scrollMarginTop: '0px'}}>
                <SecteursMobile sectors={this.state.sectors}/>
              </div>
            ) : (
              <div id="secteurs" style={{scrollMarginTop: '85px'}}>            
                <SecteursPc sectors={this.state.sectors}/>
              </div>
            )
            }
        </Media>
    )
  }
}

export default Secteurs;