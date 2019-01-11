import React, { Component } from 'react';
import "../../Variables.scss";
import "./Technologie.scss";
import axios from 'axios';


const text = "The entire starfleet couldn't destroy the whole planet. It'd take a thousand ships with more fire power than I've... There's another ship coming in. Maybe they know what happened. It's an Imperial fighter. It followed us! No. It's a short range fighter. There aren't any bases around here. Where did it come from? It sure is leaving in a big hurry. If they identify us, we're in big trouble. "

export default class Technologie extends Component {

  state = {
    technologies:[],
      sectionTechnology:[],

  };

  componentDidMount = () => {
      axios.get('/technology')
      .then((res) => {
        console.log(res.data)
        this.setState({technologies: res.data.technology})
      })
      .catch((err) => console.log("Erreur lors de l'obtention des technologies"))


      axios.get('/section-technology')
      .then((res) => {
        console.log("technologiefront",res.data)
        this.setState({sectionTechnology: res.data.sectionTechnology[0]})
      })
      .catch((err) => console.log("Erreur lors de l'obtention de section technology"))



    };


  render() {
      console.log('technologie', this.state.technologies)
    
    return (

      <div className="technologie_container" id="technologie">
       <div className="technologie-firstpart">
         <h1>Technologie</h1>
         <p>{this.state.sectionTechnology.description}</p>
        </div>
        <h3>{this.state.sectionTechnology.subtitle}</h3>
        <div className="technologie-secondpart">
        <div className="grid_container_avantage">

      {

      this.state.technologies.map((technologie, index) => {

        if(index % 2 === 0){
          return(
    
          <div className="avantage avantage1">
            <div className='title1'>
              <img src={`${technologie.picto.url}`} alt="logo Link"/>
              <h6>{technologie.title}</h6>
            </div>
            {/*<p className='text1'>{technologie.description}</p>*/}
            <div dangerouslySetInnerHTML={createMarkup(technologie.description)} className='text1 text'></div>
           </div>
            )
            }

            else {
              return(

          <div className="avantage avantage2">
            <div className='title2'>
              <img src={`${technologie.picto.url}`} alt="logo notification"/>
              <h6>{technologie.title}</h6>
            </div>            
            {/*<p className='text2'>{technologie.description}</p>*/}
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

