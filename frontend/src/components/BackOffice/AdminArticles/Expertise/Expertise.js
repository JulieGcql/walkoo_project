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

  handleSubmit = (e) => {
    e.preventDefault()
    if(window.confirm("Voulez-vous valider les modifications ?")){
      axios.put(`/expertise/edit/5`, this.state)
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
      this.setState({
        paragraphOne: res.data.expertise[0].paragraphOne,
        paragraphTwo: res.data.expertise[0].paragraphTwo,
        mediaId: res.data.expertise[0].mediaId,
      })
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

          <p>Selectionnez un média :</p>

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
              onChange={(value) => this.handleChangeParagraphTwo(value)}
            />

            <p className="ImageSelected">Icône selectionnée : {this.state.mediaId} </p>

            {/* SUBMIT */}

            <button
              onClick={(e) => this.handleSubmit(e)}          
              className="btn btn-outline-dark"
            >Modifier</button>
          
          </form>
         
        </div>      

      </div>
    )
  }
}
