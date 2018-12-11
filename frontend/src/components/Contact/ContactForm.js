import React, { Component } from 'react'
import { connect } from 'react-redux';
import './ContactForm.scss'
import Axios from 'axios';

class Contact extends Component {
  state = {
    firstNameCompleted : 'input-text',
    companyNameCompleted : 'input-text',
    emailCompleted : 'input-text',
    phoneCompleted : 'input-text',
    messageCompleted : 'input-text',
    firstName : '',
    companyName : '',
    email : '',
    phone : '',
    activitySector : '',
    requestDemo: false,
    message : '',
  }

  handleSubmit = (e) => {
    e.preventDefault()
    Axios.post('/subscribers/create', {
      firstName : this.state.firstName,
      companyName : this.state.companyName,
      email : this.state.email,
      phone : this.state.phone,
      activitySector : this.state.activitySector,
      requestDemo : this.state.requestDemo,
      message : this.state.message
    })
    .then((res) => {
      console.log(res)
      return this.props.click(e)
    })
    .catch((err) => console.log("Erreur lors de l'envoie des données du formulaire", err))
  }

  handleChange = (e) => {
    console.log(e.target.value);
    const currentFieldName = e.target.name

    this.setState({[currentFieldName]: e.target.value})
    if (e.target.name === 'requestDemo'){
      this.setState({requestDemo: !this.state.requestDemo})
    }

    if(e.target.value !== ''){
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
          onSubmit={(e) => this.handleSubmit(e)}>

            <h1>Contact</h1>

          {/* NAME FIELD */}

            <div className="form-fields">
              <input 
                type="text" 
                name="firstName" 
                id="firstName" 
                value={this.state.firstName}
                onChange={(e) => this.handleChange(e)} 
                className={this.state.firstNameCompleted} 
                required>
              </input>

              <label 
                className="label" 
                htmlFor="firstName">
              Nom *
              </label>
            </div>
            
          {/* COMPANY FIELD */}

            <div className="form-fields">
              <input 
                type="text" 
                name="companyName"
                id="companyName"
                value={this.state.companyName}
                onChange={(e) => this.handleChange(e)} 
                className={this.state.companyNameCompleted} 
              >
              </input>
              <label 
                className="label" 
                htmlFor="companyName">
              Société
              </label>
            </div>
            
          {/* EMAIL FIELD */}

            <div className="form-fields">
              <input 
                type="email" 
                name="email" 
                id="email" 
                value={this.state.email}
                onChange={(e) => this.handleChange(e)} 
                className={this.state.emailCompleted} 
                required>
              </input>
              <label 
              className="label" 
              htmlFor="email">
              Email *
              </label>
            </div>

          {/* PHONE FIELD */}


            <div className="form-fields">
              <input 
                type="tel" 
                name="phone" 
                id="phone" 
                value={this.state.phone}
                onChange={(e) => this.handleChange(e)} 
                className={this.state.phoneCompleted} 
                required>
              </input>
              <label 
                className="label" 
                htmlFor="phone">
              Téléphone *
              </label>
            </div>

          {/* SECTORS FIELD */}


            <div className="form-group form-fields">
              <select 
              className="custom-select" 
              name="activitySector"
              onChange={(e) => this.handleChange(e)}>
                <option defaultValue="">Selectionner votre secteur</option>
                <option value="Patrimoine">Patrimoine</option>
                <option value="Evenements">Evenements</option>
                <option value="Forme et Bien-être">Forme & Bien-être</option>
                <option value="SmartCampus">SmartCampus</option>
                <option value="Médias">Médias</option>
                <option value="Autre">Autre</option>
              </select>
            </div>

          {/* DEMO FIELD */}


            <div className="form-fields demo">
              <input 
                type="checkbox"
                name="requestDemo"
                id="requestDemo" 
                value={this.state.requestDemo}
                className="checkbox"
                onClick={(e) => this.handleChange(e)}
              ></input>
              <label 
                htmlFor="requestDemo">
              Je souhaite une démo
              </label>
            </div>

          {/* MESSAGE FIELD */}


            <div className="form-fields message">
              <input 
                type="text" 
                name="message" 
                id="message" 
                value={this.state.message}
                onChange={(e) => this.handleChange(e)} 
                className={this.state.messageCompleted} 
              >
              </input>
              <label 
                className="label" 
                htmlFor="message">
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
