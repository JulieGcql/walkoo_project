import React, { Component } from 'react'
import Axios from 'axios';

export default class AdminConfigurationModal extends Component {
  state = {
    password: "",
    confirmPassword: "",
  }
  
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
    if(this.state.password === this.state.confirmPassword) {

    }
  }

  handleModify = () => {
    if(this.state.password === this.state.confirmPassword){
      Axios.put(`/users/`, {
        password: this.state.password
      })
      .then((res) => {
        alert('Mot de passe changé avec succès')
        this.props.close()
      })
      .catch((err) => alert("Erreur lors de la modification"))
    } else {
      alert('Les mots de passe ne correspondent pas.')
    }
  }

  render() {
    return (
      <div>
        <div class="modal">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Modifier le mot de passe</h5>
              </div>

              <div class="modal-body">
              
                <form className="SecteurForm">

                <label 
                  className="col-form-label"
                  >Mot de passe :
                </label>

                <input 
                  type="password" 
                  name="password" 
                  value={this.state.password}
                  onChange={(e) => this.handleChange(e)}
                  className="form-control" 
                  required 
                  ></input>

                <label 
                  className="col-form-label"
                  >Confirmation :
                </label>
  
                <input 
                  type="password" 
                  name="confirmPassword" 
                  value={this.state.confirmPassword}
                  onChange={(e) => this.handleChange(e)}
                  className="form-control" 
                  required 
                  ></input>

                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-outline-primary" onClick={() => this.handleModify()}>Modifier</button>
                <button type="button" class="btn btn-outline-secondary" data-dismiss="modal" onClick={this.props.close}>Quitter</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
