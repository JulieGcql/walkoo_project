import React, { Component } from 'react'
import './AdminTags.scss'
import axios from 'axios'

export default class AdminTags extends Component {
  state = {
    name: "",
    tags: []
  }
componentDidMount = () => {
  this.getTags()
}

  addTags = (e) => {
    this.setState({name: e.target.value})
  }

  createTag = () => {
    axios.post('/tags/create', {name: this.state.name})
    .then((res) => {
      this.getTags()
    })
    .catch((err) => alert("Erreur lors de la création d'un tag"))
  }

  getTags = () => {
    axios.get('/tags')
    .then((res) => {
      this.setState({tags: res.data.tags})
    })
    .catch((err) => console.log("Erreur lors de l'obtention des tags"))
  }

  deleteTags = (id) => {
    if(window.confirm("Voulez-vous supprimer le tag ?")){
      axios.delete(`/tags/delete/${id}`)
      .then((res) => {
        this.getTags()
      })
      .catch((err) => console.log(err))
    }
  }

  render() {
    return (
      <div className="TagsContainer">
        <div className="addTags">
          <h1>Tags</h1>
          <form 
            onSubmit={() => this.createTag()} 
            className="TagForm">

            <label Medias
              className="col-form-label"
            >Création d'un tag:
            </label>

            <input 
              type="text" 
              name="tagName" 
              value={this.state.name}
              onChange={(e) => this.addTags(e)}
              className="form-control" 
              required 
              ></input>

            <input 
              type="submit" 
              value="Créer un tag" 
              className="btn btn-outline-dark"
              ></input>
            
          </form>
        </div>

        <div clasName="tagsList">
          <h3>Liste des tags :</h3>
          
          {this.state.tags.map((tag, index) => {
            return(
              <tbody key={`tag_${index}`}>
                <tr>
                  <td>{tag.name}</td>
                  <td><button 
                    className="btn btn-outline-danger"
                    onClick={() => this.deleteTags(tag.id)}>
                      <i className="fas fa-trash-alt"></i>
                  </button></td>
                </tr>
              </tbody>
            )
          })}
        </div>
      </div>
    )
  }
}
