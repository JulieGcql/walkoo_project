import React, { Component } from 'react'
import {authAction} from '../../store/actions/auth'
import { connect } from 'react-redux';
import './LoginAdmin.scss'

class LoginAdmin extends Component {
  state = {
    emailCompleted : 'input-text',
    passwordCompleted : 'input-text'
  }
  
  changeClassName = (e) => {
    if(e.target.name === "email"){

      if(e.target.value !== ''){
        this.setState({emailCompleted : 'input-text not-empty'})
      } else {
        this.setState({emailCompleted : 'input-text'})
      }

    } else if(e.target.name === "password"){
      
      if(e.target.value !== ''){
        this.setState({passwordCompleted : 'input-text not-empty'})
      } else {
        this.setState({passwordCompleted : 'input-text'})
      }
    }
  }    
  
  render() {
    return (
      <div className="LoginContainer">
        <div className="LoginBox">

        <i class="fas fa-lock"></i>
          <h1>Administrateur</h1>
          <form className="contact-form">

            <div className="form-fields">
              <input type="email" name="email" onChange={(e) => this.changeClassName(e)} className={this.state.emailCompleted} required></input>
              <label className="label" for="email">Email</label>
            </div>

            <div className="form-fields">
              <input type="password" name="password" onChange={(e) => this.changeClassName(e)} className={this.state.passwordCompleted} required></input>
              <label className="label" for="password">Mot de passe</label>
            </div>

            <div className="form-fields">
              <button className="btn btn-warning"
              onClick={() => this.props.authAction({userId: 1, isAdmin: true, username: 'Walkoo', isConnected: true})}
              >Login In</button>   
            </div>

          </form>

        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  authAction: (userData) => dispatch(authAction(userData))
})

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginAdmin);