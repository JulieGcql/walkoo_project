import React, { Component } from 'react'
import axios from 'axios';
import './Expertise.scss';

export default class Expertise extends Component {
  state = {
    subtitle:"",
    paragraph:"",
    medias: []
  }

  componentDidMount = () => {
    this.setState({subtitle: this.props.subtitle, paragraph: this.props.paragraph})
  }
  
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleModify = (id) => {
    axios.put(`/expertise/edit/${id}`, {
      subtitle: this.state.subtitle,
      paragraph: this.state.paragraph,
      mediaId: this.props.mediaId
    })
    .then((res) => {
      this.props.close()
    })
    .catch((err) => alert("Erreur lors de la modification"))
  }

  getMedias = () => {
    axios.get('/tags/expertise')
    .then((res) => {
      console.log(res);
      this.setState({medias : res.data.tag.medias})
    })
    .catch((err) => console.log(err))
  }

  

  render() {
    return (
      <div className="expertContainer">
    {/* Edit expertise  */}

        <div className="editExpertise">

          <form 
            onSubmit={(e) => this.handleSubmit(e)} 
            className="ExpertForm">

            <h3>Modification</h3>

            <label 
              className="col-form-label"
            >Nouveau sous-titre :
            </label>

            <input 
              type="text" 
              name="subtitle" 
              value={this.state.subtitle}
              onChange={(e) => this.handleChange(e)}
              className="form-control" 
              rows="8"
              required 
              ></input>

            <label 
              className="col-form-label"
              >Nouveau paragraphe:
            </label>

            <textarea 
              type="text" 
              name="paragraph2" 
              value={this.state.paragraph}
              onChange={(e) => this.handleChange(e)}
              className="form-control" 
              rows="8"
              required 
              ></textarea>     
          </form>

          <button 
              type="button" 
              class="btn btn-outline-primary" 
              onClick={() => this.handleModify(this.props.id)}
              >Modifier
            </button>

        </div>

        <div className="MediaList">

          <h3>Selectionnez une image :</h3>

            {this.state.medias && 
            this.state.medias.map((media) => {
              return (
                
                <button 
                onClick={() => this.getMediaId(media.id, media.name)}>

                  <img 
                    src={`http://${media.url}`} 
                    alt={media.name}/>
                  <p>{media.id}: {media.name}</p>

                </button>

              )
            })}
          
          </div>
      </div>
    )
  }
}
