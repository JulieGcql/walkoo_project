import React, { Component } from 'react';
import './MediasSalons.scss';
import Axios from 'axios'

export default class Medias extends Component {
  
  state = {
    events : []
  }
  
componentDidMount = () => {
  Axios.get ('/events/')
  .then ((res)=> {console.log (res.data.events);this.setState({events:res.data.events})})
.catch((err)=> {console.log(err)});
}
    
  render() {
    console.log(this.state);
    return (




      <div className="grid-container">

        
          
        
        <div className="ListeSalons">
        <h1 className="msTitle">Salons</h1>
          {
            this.state.events.filter((event) => {
              return event.type == 'salon'
            }).map((event, index) => {
              return (
                <p key={index}>{event.title  }</p>)
            })
          }

        </div>

        
         

          <div className="ListeMedia">
          <h1 className="msTitle" >Média</h1>
          {
            this.state.events.filter((event) => {
              return event.type == 'media'
            }).map((event, index) => {
              return (
                <p key={index}>{event.title  }</p>)
            })
          }


          </div>

        </div>

      


    )
  }
}
