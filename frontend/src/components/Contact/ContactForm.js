import React, { Component } from 'react'
import { connect } from 'react-redux';
import './ContactForm.scss'

class Contact extends Component {
  state = {
    nameCompleted : 'input-text',
    companyCompleted : 'input-text',
    emailCompleted : 'input-text',
    phoneCompleted : 'input-text',
    messageCompleted : 'input-text'
  }
  
  changeClassName = (event) => {
    const currentFieldName = event.target.name
    if(event.target.value !== ''){
      this.setState({[`${currentFieldName}Completed`] : 'input-text not-empty'})
    } else {
      this.setState({[`${currentFieldName}Completed`] : 'input-text'})
    }
  }    
  
  render() {
    return (
      <div className="ContactContainer">

          <form 
          className="contact-form"
          onSubmit={this.props.click}>

            <h1>Contact</h1>

          {/* NAME FIELD */}

            <div className="form-fields">
              <input 
                type="text" 
                name="name" 
                id="name" 
                onChange={(e) => this.changeClassName(e)} 
                className={this.state.nameCompleted} 
                required>
              </input>

              <label 
                className="label" 
                for="name">
              Nom *
              </label>
            </div>
            
          {/* COMPANY FIELD */}

            <div className="form-fields">
              <input 
                type="text" 
                name="company"
                id="company"
                onChange={(e) => this.changeClassName(e)} 
                className={this.state.companyCompleted} 
              >
              </input>
              <label 
                className="label" 
                for="company">
              Société
              </label>
            </div>
            
          {/* EMAIL FIELD */}

            <div className="form-fields">
              <input 
                type="email" 
                name="email" 
                id="email" 
                onChange={(e) => this.changeClassName(e)} 
                className={this.state.emailCompleted} 
                required>
              </input>
              <label 
              className="label" 
              for="email">
              Email *
              </label>
            </div>

          {/* PHONE FIELD */}


            <div className="form-fields">
              <input 
                type="tel" 
                name="phone" 
                id="phone" 
                onChange={(e) => this.changeClassName(e)} 
                className={this.state.phoneCompleted} 
                required>
              </input>
              <label 
                className="label" 
                for="phone">
              Téléphone *
              </label>
            </div>

          {/* SECTORS FIELD */}


            <div className="form-group form-fields">
              <select className="custom-select">
                <option selected="">Selectionner votre secteur</option>
                <option value="1">Patrimoine</option>
                <option value="2">Evenements</option>
                <option value="3">Forme & Bien-être</option>
                <option value="4">SmartCampus</option>
                <option value="5">Médias</option>
                <option value="6">Autre</option>
              </select>
            </div>

          {/* DEMO FIELD */}


            <div className="form-fields demo">
              <input 
                type="checkbox"
                name="demo"
                id="demo" 
              ></input>
              <label 
                for="demo">
              Je souhaite une démo
              </label>
            </div>

          {/* MESSAGE FIELD */}


            <div className="form-fields message">
              <input 
                type="text" 
                name="message" 
                id="message" 
                onChange={(e) => this.changeClassName(e)} 
                className={this.state.messageCompleted} 
              >
              </input>
              <label 
                className="label" 
                for="message">
              Message
              </label>
            </div>

          {/* BUTTON */}

            <div className="form-fields button">
              <button 
              className="btn btn-warning"
              >Envoyer</button>   
            </div>

          </form>
          
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact); 
