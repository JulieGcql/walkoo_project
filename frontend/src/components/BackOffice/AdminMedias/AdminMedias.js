import React, { Component } from 'react'
import './AdminMedias.scss'
import axios from 'axios'

export default class AdminMedias extends Component {
  state = {
    tags: [],
    mediasList: [],
    tagIdSelected:[],
  }

  componentDidMount(){
    this.getMedias()
    this.getTags()
  }

  uploadFile(e) {
    e.preventDefault();
    let data = new FormData()
    data.append('file', this.state.file)
    data.append('tagIds', this.state.tagIdSelected.map(tag => tag.id))
    if (this.state.tagIdSelected.length === 0){
      alert("Selectionnez un tag")
    }
    else {
    axios.post('/medias/create', data)
      .then((res) => {
        alert("Votre image a bien été créée")
        this.getMedias()
      })
      .catch((err) => console.log(err))
    }
  }


  getTagsSelected = (tag) => {
    let currentSelectedIds = this.state.tagIdSelected;
    if(currentSelectedIds.includes(tag)){
      const index = currentSelectedIds.indexOf(tag)
      currentSelectedIds.splice(index, 1)
    } else {
      currentSelectedIds.push(tag)
    }
    this.setState({tagIdSelected: currentSelectedIds})
  }


  handleDelete = (id) => {
    if(window.confirm("Voulez-vous supprimer le media ?")){
      axios.delete(`/medias/${id}`)
      .then((res) => {
        this.getMedias()
      })
      .catch((err) => console.log(err))
    }
  }

  getTags = () => {
    axios.get('/tags')
    .then((res) => {
      this.setState({tags : res.data.tags})
    })
    .catch((err) => console.log(err))
  }

  getMedias = () => {
    axios.get('/medias')
    .then((res) => {
      this.setState({mediasList: res.data.medias})
    })
    .catch((err) => console.log("Erreur lors de l'obtention des medias"))
  }

  render() {
    return (
      <div className="MediasTagContainer">

        <h1>Galerie</h1>

        <div className="MediasContainer">

          <form
            onSubmit={(e) => this.uploadFile(e)}
            className="addMedias">

            <div className="mediaCreate">
              <h3> Création d'un média :</h3>

              <div className="uploadImage">
              
                <input 
                  type="file" 
                  onChange={(e) => this.setState({file: e.target.files[0]})}/>

              </div>
            </div>

            <div className="tagCreate">
              <h3>Sélectionnez un tag :</h3>

              <div className="check-tag">
                
              {
              this.state.tags && 
              this.state.tags.map((tag, index) => {
                return(               
                  <div className="custom-control custom-checkbox" key={index}>
                    <input  onClick={() => this.getTagsSelected(tag)} type="checkbox" className="custom-control-input" id={index}></input>
                    <label className="custom-control-label" htmlFor={index}>{tag.name}</label>
                  </div>
                
                )
              })
                
              }
              </div>
            </div>

            <div className="buttonMedia">
              <input
                type="submit"
                className="btn btn-outline-dark"
                value="Créer un média"
              ></input>
            </div>

          </form>
          
        </div>

        <hr/>

        <div className="mediasListContainer">

          <h3>Liste des médias :</h3>

          <div className="mediasList">

          {this.state.mediasList && 
          this.state.mediasList.map((media, index) => {
            return (
              
              <div className="Media" key={index}>
                <img 
                  src={`${media.url}`} 
                  alt={media.name}/>

                <p>{media.id}: {media.name}</p>

                <button 
                  className="btn btn-outline-danger"
                  onClick={() => this.handleDelete(media.id)}>
                    <i className="fas fa-trash-alt"></i>
                </button>

              </div>
              
            )
          })}

          </div>

        </div>

      </div>
    )
  }
}
