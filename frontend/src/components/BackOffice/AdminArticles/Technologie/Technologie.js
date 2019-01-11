import React, { Component } from 'react'
import './Technologie.scss'
import axios from 'axios'
import TechnologieModal from './TechnologieModal';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default class Secteurs extends Component {
  state = {
    technologies: [],
    medias: [],
    mediaId:"",
    title:"",
    description:"",
    modal: false,
    idSelected:"",
    mediaIdSelected:"",
    titleSelected:"",
    descriptionSelected:"",
    urlSelected:"",
    sectionTechnology:[],
    sectionTechnologyDescription:"",
    sectionTechnologySubtitle:"",
  }

  componentDidMount() {
    this.getTechnology()
    this.getMedias()
    this.getSectionTechnology()
  }
  
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleChangeDescription = (value) => {
    this.setState({description: value})
  }

  handleChangeSectionTechnologyDescription = (value) => {
    this.setState({sectionTechnologyDescription: value})
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

  handleClick = (id, mediaId, title, description) => {
    this.setState({modal: !this.state.modal, idSelected: id, mediaIdSelected:mediaId, titleSelected: title, descriptionSelected: description})
    this.getTechnology()
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.mediaId){
      axios.post('/technology/create', this.state)
      .then((res) => {
        alert("Création efffectuées")
        this.getTechnology()
      })
      .catch((err) => console.log(err))
    } else {
      alert("Selectionnez un icône.")
    }

  }

  handleSubmitSectionTechnology = () => {
      if(window.confirm("Voulez-vous valider les modifications ?")){
        axios.put(`/section-technology/edit/1`,{
          description: this.state.sectionTechnologyDescription,
          subtitle: this.state.sectionTechnologySubtitle,

        })
            .then((res) => alert("Modifications effectuées"))
            .catch((err) => alert("Erreur lors de la sauvegarde des modifications"))
      }
    }

  getMedias = () => {
    axios.get('/tags/technologie')
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

  getSectionTechnology = () => {
    axios.get('/section-technology')
    .then((res) => {
      this.setState({
        sectionTechnologyDescription: res.data.sectionTechnology[0].description,
        sectionTechnologySubtitle: res.data.sectionTechnology[0].subtitle,
      })
    })
    .catch((err) => console.log("Erreur lors de l'obtention de section technologie"))
  }


  render() {

    return (
      <div className="technologieContainer">

        {/* CREATION PRESENTATION */}
        <div className="CreateTechnologiePresentation">

          <form className="PresentationForm" >


          <label
              className="col-form-label"
          >Presentation :
          </label>

          <ReactQuill
              required
              id="sectionTechnologyDescription"
              className="sectionTechnologyDescription"
              value={this.state.sectionTechnologyDescription}
              onChange={(value) => this.handleChangeSectionTechnologyDescription(value)}

          />


        {/* CREATION SOUS-TITRE */}


          <label
              className="col-form-label"
          >Sous-titre :
          </label>

          <input
              type="text"
              name="sectionTechnologySubtitle"
              value={this.state.sectionTechnologySubtitle}
              onChange={(e) => this.handleChange(e)}
              className="form-control"
              required
          ></input>


            <button
                onClick={() => this.handleSubmitSectionTechnology()}
                className="btn btn-outline-dark modifbtn"
            >Modifier</button>

      </form>



      </div>

        {/* CREATION TECHNOLOGIE  */}

        <div className="CreateTechnologie">

        <div className="MediaList">

          <h3>Selectionnez une icône :</h3>

            {this.state.medias && 
            this.state.medias.map((media, index) => {
              return (
                
                <button 
                onClick={() => this.getMediaId(media.id, media.name)} key={`rel2 ${index}`}>

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
            className="TechnologieForm">

            <h3>Création des avantages :</h3>

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
          />

        }
        
        {/* LISTE TECHNOLOGIE  */}

        <div className="TechnologieList">
          
          <h3>Liste des avantages :</h3>

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
                      onClick={() => this.handleClick(technology.id,technology.mediaId,technology.title, technology.description,)}>
                        <i className="fas fa-pen"></i>
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
