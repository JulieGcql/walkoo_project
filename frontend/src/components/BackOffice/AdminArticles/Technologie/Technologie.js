import React, { Component } from 'react'
// import './Secteurs.scss'
import axios from 'axios'
import TechnologieModal from './TechnologieModal';

export default class Secteurs extends Component {
  state = {
    technologies: [],
    medias: [],
    mediaId:"",
    title:"",
    description:"",
    url:"",
    modal: false,
    idSelected:"",
    mediaIdSelected:"",
    titleSelected:"",
    descriptionSelected:"",
    urlSelected:""
  }

  componentDidMount() {
    this.getTechnology()
    this.getMedias()
  }
  
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  getMediaId = (id) => {
    this.setState({mediaId: id})
  }

  handleDelete = (id) => {
    if(window.confirm("Voulez-vous supprimer l'avantage ?")){
      axios.delete(`/technology/delete/${id}`)
      .then((res) => {
        this.getTechnology()
      })
      .catch((err) => console.log(err))
    }
  }

  handleClick = (id, mediaId, title, description, url) => {
    this.setState({modal: !this.state.modal, idSelected: id, mediaIdSelected:mediaId, titleSelected: title, descriptionSelected: description, urlSelected: url})
    this.getTechnology()
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.mediaId){
      axios.post('/technology/create', this.state)
      .then((res) => {
        alert(res.data.message)
        this.getTechnology()
      })
      .catch((err) => console.log(err))
    } else {
      alert("Selectionnez un icône.")
    }
  }

  getMedias = () => {
    axios.get('/tags/technology')
    .then((res) => {
      this.setState({medias : res.data.tag.medias})
    })
    .catch((err) => console.log(err))
  }

  getTechnology = () => {
    axios.get('/technology')
    .then((res) => {
      this.setState({technologies: res.data.technology})
    })
    .catch((err) => console.log("Erreur lors de l'obtention de l'avantage"))
  }

  render() {
    return (
      <div className="technologyContainer">

        {/* CREATION SECTEUR  */}
        <div className="CreateTechnology">

          <div className="MediaList">

          <h3>Selectionnez une icône :</h3>

            {this.state.medias && 
            this.state.medias.map((media) => {
              return (
                
                <button 
                onClick={() => this.getMediaId(media.id, media.name)}>

                  <img 
                    src={`${media.url}`} 
                    alt={media.name}/>
                  <p>{media.id}</p>

                </button>

              )
            })}
          
          </div>

          <form 
            onSubmit={(e) => this.handleSubmit(e)} 
            className="TechnologyForm">

            <h3>Création d'un secteur :</h3>

            <label 
              className="col-form-label"
            >Titre :
            </label>

            <input 
              type="text" 
              name="title" 
              value={this.state.title}
              onChange={(e) => this.handleChange(e)}
              className="form-control" 
              required 
              ></input>

            <label 
              className="col-form-label"
              >Description :
            </label>

            <textarea 
              type="text" 
              name="description" 
              value={this.state.description}
              onChange={(e) => this.handleChange(e)}
              className="form-control" 
              rows="5"
              required 
              ></textarea>

              <label 
              className="col-form-label"
              >Url :
              </label>

            <input 
              type="text" 
              name="url" 
              value={this.state.url}
              onChange={(e) => this.handleChange(e)}
              className="form-control" 
              required 
              ></input>

              <p className="IconeSelected">Icône selectionnée : {this.state.mediaId} </p>
              

            <input 
              type="submit" 
              value="Créer un avantage" 
              className="btn btn-outline-dark"
              ></input>

          </form>
        </div>

        <hr/>

        {this.state.modal && 

          <TechnologieModal 
            close={this.handleClick}
            id={this.state.idSelected}
            mediaId={this.state.mediaIdSelected}
            title={this.state.titleSelected} 
            description={this.state.descriptionSelected}
            url={this.state.urlSelected}
          />

        }
        
        {/* LISTE SECTEURS  */}

        <div className="TechnologyList">
          
          <h3>Liste des avantages :</h3>

          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Titre</th>
                <th scope="col">Media</th>
                <th scope="col">Description</th>
                <th scope="col">URL</th>
                <th scope="col">Modifier</th>
                <th scope="col">Supprimer</th>
              </tr>
            </thead>

            {this.state.technologies &&

            this.state.technologies.map((technology, index) => {
              return (

                <tbody key={index}>
                  <tr>

                    <th scope="row">{technology.title}</th>
                    <td>{technology.mediaId}</td>
                    <td>{technology.description}</td>
                    <td><button 
                      className="btn btn-outline-primary"
                      onClick={() => this.handleClick(technology.id,technology.mediaId,technology.title, technology.description, technology.url)}>
                        <i class="fas fa-pen"></i>
                    </button></td>
                    <td><button 
                      className="btn btn-outline-danger"
                      onClick={() => this.handleDelete(technology.id)}>
                        <i className="fas fa-trash-alt"></i>
                    </button></td>

                  </tr>
                  
                </tbody>

              )
            })}

          </table>

        </div>

      </div>
    )
  }
}
