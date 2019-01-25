import React, { Component } from 'react'
import axios from 'axios'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './AdminConfigurations.scss'
import AdminConfigurationModal from './AdminConfigurationModal'

export default class AdminConfigurations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      medias : [],
      title:"",
      mediaId:"",
      phone:"",
      twitter:"",
      linkedin:"",
      metaTitle:"",
      metaDescription:"",
      metaKeyword:"",
      metaImage:"",
      rgpd:"",
      modal: false,
    }
  }

  getConfiguration = () => {
    axios.get('/configurations')
    .then((res) => {
      this.setState({
        title: res.data.configurations[0].title,
        mediaId: res.data.configurations[0].mediaId,
        phone: res.data.configurations[0].phone,
        twitter: res.data.configurations[0].twitter,
        linkedin: res.data.configurations[0].linkedin,
        rgpd: res.data.configurations[0].rgpd,
        metaTitle: res.data.configurations[0].metaTitle,
        metaDescription: res.data.configurations[0].metaDescription,
        metaKeyword: res.data.configurations[0].metaKeyword,
        metaImage: res.data.configurations[0].metaImage
      })
    })
    .catch((err) => console.log(err))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if(window.confirm("Voulez-vous valider les modifications ?")){
      axios.put(`/configurations/edit/1`, this.state)
      .then((res) => alert("Modifications effectuées"))
      .catch((err) => alert("Erreur lors de la sauvegarde des modifications"))
      }
  }

  handleClick = () => {
    this.setState({modal: !this.state.modal})
  }

  getMediaId = (id) => {
    this.setState({mediaId: id})
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleChangeRGPD = (value) => {
    this.setState({rgpd: value})
  }
  
  componentDidMount = () => {
    this.getMedias()
    this.getConfiguration()
  }

  getMedias = () => {
    axios.get('/tags/logo')
    .then((res) => {
      this.setState({medias : res.data.tag.medias})
    })
    .catch((err) => console.log(err))
  }

  render() {
    return (
      
      <div className="AdminConfigurations">
      {
        this.state.modal &&
        <AdminConfigurationModal close={this.handleClick}/>
      }
        <h1>Configurations</h1>

{/* PASSWORD */}

        <button 
          onClick={() => this.handleClick()}
          className="btn btn-outline-dark password"
        >
          Modifier le mot de passe
        </button>

{/* MEDIAS */}

        <div className="LogoList">

          <h3>Listes des logos :</h3>

            {this.state.medias && 
            this.state.medias.map((media, index) => {
              return (           
                <button 
                key={index}
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
          className="ConfigurationForm"
        >

{/* SELECT MEDIAID */}

        <label htmlFor="logo-select">Logo :</label>
        <select 
          id="logo-select"
          className="form-control"
          onChange={(e) => this.setState({mediaId: e.target.value})}>
        {this.state.medias && 
            this.state.medias.map((media, index) => {
              return (
                <option 
                key={index}
                value={media.id}>{media.id}</option>
              )
            })}
            
        </select>

{/* TITLE */}

          <label htmlFor="title">Titre :</label>
          <input
            className="form-control" 
            type="text"
            value={this.state.title}
            onChange={(e) => this.handleChange(e)}
            id="title"
            name="title"
          />

{/* PHONE */}
          
          <label htmlFor="phone">Téléphone :</label>
          <input
            className="form-control" 
            type="tel"
            value={this.state.phone}
            onChange={(e) => this.handleChange(e)} 
            id="phone"
            name="phone"
          />

{/* TWITTER */}

          <label htmlFor="twitter">Lien Twitter :</label>
          <input
            className="form-control" 
            type="text"
            value={this.state.twitter}
            onChange={(e) => this.handleChange(e)} 
            id="twitter"
            name="twitter"
          />

{/* LINKEDIN */}

          <label htmlFor="linkedin">Lien LinkedIn :</label>
          <input
            className="form-control" 
            type="text"
            value={this.state.linkedin}
            onChange={(e) => this.handleChange(e)} 
            id="linkedin"
            name="linkedin"
          />


{/* RGPD */}

          <label 
            className="labelRGPD"
            htmlFor="rgpd">RGPD :</label>
          <ReactQuill 
            id="rgpd"
            className="rgpd"
            value={this.state.rgpd}
            onChange={(value) => this.handleChangeRGPD(value)}
          />


{/* SUBMIT */}

          <button
            onClick={(e) => this.handleSubmit(e)}          
            className="btn btn-outline-dark"
          >Modifier</button>

        </form>

      </div>
    )
  }
}
