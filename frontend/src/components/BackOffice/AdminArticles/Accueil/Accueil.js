import React, { Component } from 'react'
import './Accueil.scss'
import axios from 'axios'

export default class Accueil extends Component {

  state = {
    catchPhrase: "",
    subtitle: "",

  }

  componentDidMount() {
    this.getHomes()
  }
  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({ [e.target.name]: e.target.value })
  }

  handleDelete = (id) => {
    if (window.confirm("voulez-vous supprimer l'accueil")) {
      axios.delete(`/homes/delete/${id}`)
        .then((res) => {
          this.getHomes()
        })
        .catch((err) => console.log(err))
    }
  }
  editHome = (e) => {
    e.preventDefault()
    if (window.confirm("Voulez-vous changer le sous-titre ?") && this.state.subtitle !== '') {
      axios.put('/homes', this.state)
        .then((res) => {
          alert("Le sous-titre a été changé.")
          this.getHomes()
        })
        .catch((err) => console.log(err))

    }else{
      alert("Un sous-titre doit être ajouté !!!")
    }
  
  }

  getHomes = () => {
    axios.get('/homes')
      .then((res) => {
        this.setState({ ...res.data.homeData})
        console.log('data from home', res.data)
      })
      .catch((err) => console.log('error from home', err))

  }

  render() {
    return (
      <div>
        <form
          onSubmit={(e) => this.editHome(e)}
          className="SecteurForm">

          <h3 className="hugoTitleAccueil">Modification de l'accueil</h3>

         
          <label
            className="col-form-label hugoSubtitleAccueil"
          >Sous-titre :
          </label>

          <textarea
            type="text"
            name="subtitle"
            value={this.state.subtitle}
            onChange={(e) => this.handleChange(e)}
            className="form-control form-controlAccueil hugoTextareaAccueil"
            rows="5"
          ></textarea>

          <input
            type="submit"
            value="Modifier le sous-titre"
            className="btn btnAccueil btn-outline-dark"
          ></input>


        </form>


        
      </div>

    )
  }

}
