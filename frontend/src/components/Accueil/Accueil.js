import React, { Component } from 'react';
import {demoAction} from '../../store/actions/demo'
import './Accueil.scss';
import { connect } from 'react-redux'
import Axios from 'axios'


export class Accueil extends Component {

  state = {
    homes : {}

  }

componentDidMount = () => {
  Axios.get ('/homes')
  .then ((res)=> {console.log (res.data.homeData);
    this.setState({homes:res.data.homeData})})
.catch((err)=> {console.log(err)});
}

  render() {
    console.log(this.state);
    return (
      <div className="containerAnim" id="home">

        <div className="Text1 ">
              <div className="logo">
                  <h1>
                      <div className="logo-firstpart">
                          au bon <br/>
                          au bon <br/>
                          le bon <br/>
                      </div>
                  </h1>
                  <h1>
                      <div className="logo-secondpart">
                          contenu<br/>
                          endroit<br/>
                          moment<br/>
                      </div>
                  </h1>
              </div>
        </div>

        <div className="secondContainer">

          {/* <p className="Text2">{this.state.homes.subtitle } </p> */}
          <div dangerouslySetInnerHTML={createMarkup(this.state.homes.subtitle)} className="Text2"></div>
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

function createMarkup(stringyfiedHtml) {
  return { __html: stringyfiedHtml };
}


const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = {
  demoAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Accueil)











