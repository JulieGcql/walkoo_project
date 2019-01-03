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
    if (this.state.catchPhrase !== '' && this.state.subtitle !== '') {
      axios.put('/homes', this.state)
        .then((res) => {
          alert("L'accueil a été créé.")
          this.getHomes()
        })
        .catch((err) => console.log(err))

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

          <h3 className="hugoTitleAccueil">Création de l'accueil</h3>

         
          <label
            className="col-form-label hugoSubtitleAccueil"
          >Sous-titre :
          </label>

          <textarea
            type="text"
            name="subtitle"
            value={this.state.subtitle}
            onChange={(e) => this.handleChange(e)}
            className="form-control form-controlAccueil"
            rows="5"
          ></textarea>

          <input
            type="submit"
            value="Modifier l'accueil"
            className="btn btnAccueil btn-outline-dark"
          ></input>


        </form>


        
      </div>

    )
  }

}
