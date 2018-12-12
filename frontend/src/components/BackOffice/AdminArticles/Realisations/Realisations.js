import React, { Component } from 'react'
import './Secteurs.scss'
import axios from 'axios'
import RealisationModal from './RealisationModal';

export default class Secteurs extends Component {
  state = {
    realisation: [],
    title:"",
    description:"",
    url:"",
    selected: "",
    modal: false,
    idSelected:"",
    titleSelected:"",
    descriptionSelected:"",
    url:"",
  }

  componentDidMount() {
    this.getRealisation()
  }
  
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleDelete = (id) => {
    if(window.confirm("Voulez-vous supprimer de la realisation ?")){
      axios.delete(`/realisation/delete/${id}`)
      .then((res) => {
        this.getRealisation()
      })
      .catch((err) => console.log(err))
    }
  }

  handleClick = (id, title, description) => {
    this.setState({modal: !this.state.modal, idSelected: id,  titleSelected: title, descriptionSelected: description})
    this.getRealisation()
  }

  getRealisation = () => {
    axios.get('/realisation')
    .then((res) => {
      this.setState({realisation: res.data.realisations})
    })
    .catch((err) => console.log("Erreur lors de l'obtention des realisations"))
  }

  render() {
    return (
      <div className="realisationContainer">

        {/* CREATION REALISATION  */}
        <div className="CreateRealisation">

          <form 
            onSubmit={(e) => this.handleSubmit(e)} 
            className="RealisationForm">

            <h3>Création d'un secteur :</h3>

              {/* *******Title******* */}

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


              {/* *******Description******* */}

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
              

                {/* *******Lien******* */}

             <label 
              className="col-form-label"
              >Description :
            </label>

            <input 
              type="text" 
              name="description" 
              value={this.state.url}
              onChange={(e) => this.handleChange(e)}
              className="form-control" 
              required 
              ></input>
              

            <input 
              type="submit" 
              value="Créer une rélisation" 
              className="btn btn-outline-dark"
              ></input>

          </form>
        </div>

        <hr/>

        {this.state.modal && 

          <RealisationModal 
            close={this.handleClick}
            id={this.state.idSelected}
            title={this.state.titleSelected} 
            description={this.state.descriptionSelected}
            url={this.state.urlSelected}
          />

        }
        
        {/* LISTE SECTEURS  */}

        <div className="RealisationList">
          
          <h3>Liste des réalisations :</h3>

          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Titre</th>
                <th scope="col">Description</th>
                <th scope="col">Lien</th>
                <th scope="col">Modifier</th>
                <th scope="col">Supprimer</th>
              </tr>
            </thead>

            {this.state.realisation &&

            this.state.realisation.map((realisation, index) => {
              return (

                <tbody key={index}>
                  <tr>

                    <th scope="row">{realisation.title}</th>
                    <td>{realisation.description}</td>
                    <td>{url.description}</td>
                    <td><button 
                      className="btn btn-outline-primary"
                      onClick={() => this.handleClick(realisation.id,realisation.title, realisation.description)}>
                        <i class="fas fa-pen"></i>
                    </button></td>
                    <td><button 
                      className="btn btn-outline-danger"
                      onClick={() => this.handleDelete(realisation.id)}>
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
