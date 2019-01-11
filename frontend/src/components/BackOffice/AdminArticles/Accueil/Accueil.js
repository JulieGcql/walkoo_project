import React, { Component } from 'react'
import './Accueil.scss'
import axios from 'axios'
import ReactQuill from 'react-quill';


export default class Accueil extends Component {

  state = {
    catchPhrase: "",
    subtitle: "",

  }

  componentDidMount() {
    this.getHomes()
  }
  handleChange = (e) => {
   
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

    } else {
      alert("Un sous-titre doit être ajouté !!!")
    }

  }

  getHomes = () => {
    axios.get('/homes')
      .then((res) => {
        this.setState({ ...res.data.homeData })
        
      })
      .catch((err) => console.log('error from home', err))

  }

  handleChangeSubtitle = (value) => {
    this.setState({ subtitle: value })
  }

  render() {
    return (
      <div className="SecteurForm">
        
          

          <h3 className="hugoTitleAccueil">Modification de l'accueil</h3>


          
<form className="SubtitleForm"
onSubmit={(e) => this.editHome(e)}>

            <label
              className="labelSubtitle"
              htmlFor="accueilSubtitle">Sous-titre :</label>
            <ReactQuill
              id="accueilSubtitle"
              className="accueilSubtitle"
              value={this.state.subtitle}
              onChange={(value) => this.handleChangeSubtitle(value)}
              
              
            />

         
          

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
