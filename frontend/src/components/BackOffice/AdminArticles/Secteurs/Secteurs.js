import React, { Component } from 'react'
import './Secteurs.scss'
import axios from 'axios'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import SecteurModal from './SecteurModal';

export default class Secteurs extends Component {
  state = {
    sectors: [],
    medias: [],
    mediaId:"",
    title:"",
    description:"",
    modal: false,
    idSelected:"",
    mediaIdSelected:"",
    titleSelected:"",
    descriptionSelected:""
  }

  componentDidMount() {
    this.getSectors()
    this.getMedias()
  }
  
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleChangeDescription = (value) => {
    this.setState({description: value})
  }

  getMediaId = (id) => {
    this.setState({mediaId: id})
  }

  handleDelete = (id) => {
    if(window.confirm("Voulez-vous supprimer le secteur ?")){
      axios.delete(`/sectors/delete/${id}`)
      .then((res) => {
        this.getSectors()
      })
      .catch((err) => console.log(err))
    }
  }

  handleClick = (id, mediaId, title, description) => {
    this.setState({modal: !this.state.modal, idSelected: id, mediaIdSelected:mediaId, titleSelected: title, descriptionSelected: description})
    this.getSectors()
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.mediaId){
      axios.post('/sectors/create', this.state)
      .then((res) => {
        alert(res.data.message)
        this.getSectors()
      })
      .catch((err) => console.log(err))
    } else {
      alert("Selectionnez une icône.")
    }
  }

  getMedias = () => {
    axios.get('/tags/secteur')
    .then((res) => {
      this.setState({medias : res.data.tag.medias})
    })
    .catch((err) => console.log(err))
  }

  getSectors = () => {
    axios.get('/sectors')
    .then((res) => {
      this.setState({sectors: res.data.sectors})
    })
    .catch((err) => console.log("Erreur lors de l'obtention des secteurs"))
  }

  render() {
    return (
      <div className="secteurContainer">

        {/* CREATION SECTEUR  */}
        <div className="CreateSector">

          <div className="MediaList">

          <h3>Selectionnez une icône :</h3>

            {this.state.medias && 
            this.state.medias.map((media) => {
              return (
                
                <button 
                onClick={() => this.getMediaId(media.id)}>

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
            className="SecteurForm">

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

              <ReactQuill 
                required
                id="description"
                className="description"
                value={this.state.description}
                onChange={(value) => this.handleChangeDescription(value)}
              /> 

              <p className="IconeSelected">Icône selectionnée : {this.state.mediaId} </p>
              

            <input 
              type="submit" 
              value="Créer un secteur" 
              className="btn btn-outline-dark"
              ></input>

          </form>
        </div>

        <hr/>

        {this.state.modal && 

          <SecteurModal 
            close={this.handleClick}
            id={this.state.idSelected}
            mediaId={this.state.mediaIdSelected}
            title={this.state.titleSelected} 
            description={this.state.descriptionSelected}
          />

        }
        
        {/* LISTE SECTEURS  */}

        <div className="SecteurList">
          
          <h3>Liste des secteurs :</h3>

          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Titre</th>
                <th scope="col">Media</th>
                <th scope="col">Description</th>
                <th scope="col">Modifier</th>
                <th scope="col">Supprimer</th>
              </tr>
            </thead>

            {this.state.sectors &&

            this.state.sectors.map((sector, index) => {
              return (

                <tbody key={index}>
                  <tr>

                    <th scope="row">{sector.title}</th>
                    <td>{sector.mediaId}</td>
                    <td>{sector.description}</td>
                    <td><button 
                      className="btn btn-outline-primary"
                      onClick={() => this.handleClick(sector.id,sector.mediaId,sector.title, sector.description)}>
                        <i class="fas fa-pen"></i>
                    </button></td>
                    <td><button 
                      className="btn btn-outline-danger"
                      onClick={() => this.handleDelete(sector.id)}>
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
