import React, { Component } from 'react'
import { authAction } from '../../store/actions/auth'
import { Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import axios from 'axios';
import './LoginAdmin.scss'

class LoginAdmin extends Component {
  state = {
    emailCompleted : 'input-text',
    passwordCompleted : 'input-text',
    email:'',
    password:''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    axios.post('/auth/signin', {
      email: this.state.email,
      password: this.state.password
    })
    .then((res) => {
      if(res.data.user.isAdmin){
        this.props.authAction(res.data)
      } else {
        alert("Vous n'avez pas les droits d'administrateur")
      }
    })
    .catch((err) => alert("Erreur lors de l'authentification"))
  }
  
  handleChange = (event) => {
    const currentFieldName = event.target.name
    this.setState({[event.target.name]: event.target.value})
    if(event.target.value !== ''){
      this.setState({[`${currentFieldName}Completed`] : 'input-text not-empty'})
    } else {
      this.setState({[`${currentFieldName}Completed`] : 'input-text'})
    }
  }    
  
  render() {
    console.log(this.props);
    if (this.props.authentification.user.userData.user.isAdmin){
      return <Redirect to="/adminhome"/>
    }
    return (
      <div className="LoginContainer">
        <div className="LoginBox">

        <i className="fas fa-lock"></i>
          <h1>Administrateur</h1>
          <form className="contact-form" onSubmit={(e) => this.handleSubmit(e)}>

            <div className="form-fields">
              <input 
              type="email" 
              name="email" 
              value={this.state.email}
              onChange={(e) => this.handleChange(e)} 
              className={this.state.emailCompleted} 
              required>
              </input>
              <label 
              className="label" 
              htmlFor="email">Email</label>
            </div>

            <div 
            className="form-fields">
              <input 
              type="password" 
              name="password" 
              value={this.state.password}
              onChange={(e) => this.handleChange(e)} 
              className={this.state.passwordCompleted} 
              required>
              </input>
              <label 
              className="label" 
              htmlForv ="password">Mot de passe</label>
            </div>

            <div className="form-fields">
              <button className="btn btn-warning"
              >Login In</button>   
            </div>

          </form>

        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  authAction
}

const mapStateToProps = (state) => ({
  ...state
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginAdmin));