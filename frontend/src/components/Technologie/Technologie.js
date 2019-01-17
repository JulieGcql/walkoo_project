import React, { Component } from 'react';
import "../../Variables.scss";
import "./Technologie.scss";
import axios from 'axios';


export default class Technologie extends Component {

  state = {
    technologies:[],
      sectionTechnology:[],

  };

  componentDidMount = () => {
      axios.get('/technology')
      .then((res) => {
        this.setState({technologies: res.data.technology})
      })
      .catch((err) => console.log("Erreur lors de l'obtention des technologies"))


      axios.get('/section-technology')
      .then((res) => {
        this.setState({sectionTechnology: res.data.sectionTechnology[0]})
      })
      .catch((err) => console.log("Erreur lors de l'obtention de section technology"))



    };


  render() {

    return (

      <div className="technologie_container" id="technologie">
       <div className="technologie-firstpart">
         <h1>Technologie</h1>
         <div className="subtitle" dangerouslySetInnerHTML={createMarkup(this.state.sectionTechnology.description)}></div>
        </div>
        <h3>{this.state.sectionTechnology.subtitle}</h3>
        <div className="technologie-secondpart">
        <div className="grid_container_avantage">

      {

      this.state.technologies.map((technologie, index) => {

        if(index % 2 === 0){
          return(
    
          <div className="avantage avantage1" key={`tech ${index}`}>
            <div className='title1'>
              <img src={`${technologie.picto.url}`} alt="logo Link"/>
              <h6>{technologie.title}</h6>
            </div>
            <div dangerouslySetInnerHTML={createMarkup(technologie.description)} className='text1 text'></div>
           </div>
            )
            }

            else {
              return(

          <div className="avantage avantage2" key={`tech ${index}`}>
            <div className='title2'>
              <img src={`${technologie.picto.url}`} alt="logo notification"/>
              <h6>{technologie.title}</h6>
            </div>
            <div dangerouslySetInnerHTML={createMarkup(technologie.description)} className='text2 text'></div>
          </div>     
              )
            }
      })

      }
      </div>
    </div>
    </div>

    )
  }
}
function createMarkup(stringyfiedHtml) {
  return {__html: stringyfiedHtml};
}

