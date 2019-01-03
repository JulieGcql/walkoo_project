import React, { Component } from 'react'
import './Expertise.scss'
import axios from 'axios'
import ExpertiseModal from './ExpertiseModal';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default class Expertise extends Component {
  state = {
    expertise: [],
    medias: [],
    mediaId:"",
    paragraphOne:"",
    paragraphTwo:"",
    // modal: false,
    // idSelected:"",
    // mediaIdSelected:"",
    // paragraphOneSelected:"",
    // paragraphTwoSelected:""
  }

  componentDidMount() {
    this.getExpertise()
    this.getMedias()
  }
  
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  getMediaId = (id) => {
    this.setState({mediaId: id})
  }

  // handleDelete = (id) => {
  //   if(window.confirm("Voulez-vous supprimer l'expertise ?")){
  //     axios.delete(`/expertise/delete/${id}`)
  //     .then((res) => {
  //       this.getExpertise()
  //     })
  //     .catch((err) => console.log(err))
  //   }
  // }

  // handleClick = (id, mediaId, paragraphOne, paragraphTwo) => {
  //   this.setState({modal: !this.state.modal, idSelected: id, mediaIdSelected:mediaId, paragraphOneSelected: paragraphOne, paragraphTwoSelected: paragraphTwo})
  //   this.getExpertise()
  // }

  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   if (this.state.mediaId){
  //     axios.post('/expertise/create', this.state)
  //     .then((res) => {
  //       this.getExpertise()
  //     })
  //     .catch((err) => console.log(err))
  //   } else {
  //     alert("Selectionnez une image.")
  //   }
  // }

  handleSubmit = (e) => {
    e.preventDefault()
    if(window.confirm("Voulez-vous valider les modifications ?")){
      axios.put(`/expertise/edit/1`, this.state)
      .then((res) => alert("Modifications effectuées"))
      .catch((err) => alert("Erreur lors de la sauvegarde des modifications"))
      }
  }

  handleChangeParagraphOne = (value) => {
    this.setState({paragraphOne : value})
  }

  handleChangeParagraphTwo = (value) => {
    this.setState({paragraphTwo : value})
  }

  getMedias = () => {
    axios.get('/tags/expertise')
    .then((res) => {
      this.setState({medias : res.data.tag.medias})
    })
    .catch((err) => console.log("Erreur getMedias"))
  }

  getExpertise = () => {
    axios.get('/expertise')
    .then((res) => {
      this.setState({expertise: res.data.expertise})
    })
    .catch((err) => console.log("Erreur lors de l'obtention de l'expertise"))
  }

  render() {
    console.log(this.state)
    return (
      <div className="expertiseContainer">

        <h3>Modification de l'expertise :</h3>

        {/* CREATION EXPERTISE */}
        <div className="CreateExpertise">

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

          <form className="ExpertiseForm">
            <label 
              className="labelExpertise"
              htmlFor="paragraphOne">Premier paragraphe :</label>
            <ReactQuill 
              id="paragraphOne"
              className="paragraphOne"
              value={this.state.paragraphOne}
              onChange={(value) => this.handleChangeParagraphOne(value)}
            />

            <label 
              className="labelExpertise"
              htmlFor="paragraphTwo">Deuxième paragraphe :</label>
            <ReactQuill 
              id="paragraphTwo"
              className="paragraphTwo"
              value={this.state.paragraphTwo}
              onChange={(value) => this.handleChangeparagraphTwo(value)}
            />

            {/* SUBMIT */}

            <button
              onClick={(e) => this.handleSubmit(e)}          
              className="btn btn-outline-dark"
            >Modifier</button>
          
          </form>

          {/* <form 
            onSubmit={(e) => this.handleSubmit(e)} 
            className="ExpertiseForm">

            <h3>Création d'une expertise :</h3>

            <label 
              className="col-form-label"
            >Premier paragraphe :
            </label>

            <textarea 
              type="text" 
              name="paragraphOne" 
              value={this.state.paragraphOne}
              onChange={(e) => this.handleChange(e)}
              className="form-control" 
              rows="5"
              required 
              ></textarea>

            <label 
              className="col-form-label"
              >Second paragraphe :
            </label>

            <textarea 
              type="text" 
              name="paragraphTwo" 
              value={this.state.paragraphTwo}
              onChange={(e) => this.handleChange(e)}
              className="form-control" 
              rows="5"
              required 
              ></textarea>

              <p className="ImageSelected">Image selectionnée : {this.state.mediaId} </p>
              

            <input 
              type="submit" 
              value="Créer une expertise" 
              className="btn btn-outline-dark"
              ></input>

          </form> */}
        </div>

        {/* <hr/> */}

        {/* {this.state.modal && 

          <ExpertiseModal 
            close={this.handleClick}
            id={this.state.idSelected}
            mediaId={this.state.mediaIdSelected}
            paragraphOne={this.state.paragraphOneSelected} 
            paragraphTwo={this.state.paragraphTwoSelected}
          />

        } */}
        
        {/* LISTE EXPERTISE */}

        {/* <div className="ExpertiseList">
          
          <h3>Liste de l'expertise :</h3>

          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Premier paragraphe</th>
                <th scope="col">Second paragraphe</th>
                <th scope="col">Média</th>
                <th scope="col">Modifier</th>
                <th scope="col">Supprimer</th>
              </tr>
            </thead>

            {this.state.expertise &&

            this.state.expertise.map((expertise, index) => {
              return (

                <tbody key={index}>
                  <tr>

                    <th scope="row">{expertise.paragraphOne}</th>
                    <td>{expertise.paragraphTwo}</td>
                    <td>{expertise.mediaId}</td>
                    <td><button 
                      className="btn btn-outline-primary"
                      onClick={() => this.handleClick(expertise.id,expertise.mediaId,expertise.paragraphOne, expertise.paragraphTwo)}>
                        <i class="fas fa-pen"></i>
                    </button></td>
                    <td><button 
                      className="btn btn-outline-danger"
                      onClick={() => this.handleDelete(expertise.id)}>
                        <i className="fas fa-trash-alt"></i>
                    </button></td>

                  </tr>
                  
                </tbody>

              )
            })}

          </table>

        </div> */}

      </div>
    )
  }
}
