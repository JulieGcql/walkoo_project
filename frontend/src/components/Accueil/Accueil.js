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
      <div className="containerAnim">

        <div className="Text1 ">



              <div className="first">Le bon contenu</div>
              <div className="second">Au bon endroit</div>
              <div className="third">Au bon moment</div>
        </div>

        <div className="secondContainer">

          {/* <p className="Text2">{this.state.homes.subtitle } </p> */}

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











