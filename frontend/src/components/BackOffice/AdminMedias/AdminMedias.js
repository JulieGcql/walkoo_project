import React, { Component } from 'react'
import AdminTags from './AdminTags'
import './AdminMedias.scss'
import axios from 'axios'

export default class AdminMedias extends Component {
  state = {
    selectTags: [],
    medias: []
  }

  uploadFile(e) {
    e.preventDefault();
    let data = new FormData()
    data.append('file', this.state.file, this.state.file.filename)
    axios.post('/upload', data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }
  render() {
    return (
      <div className="MediasTagContainer">
        <div>
          <AdminTags />
        </div>
        <h1>Médias</h1>
        <div className="MediasContainer">
          <div className="formUpload">

            <form
              onSubmit={(e) => this.uploadFile(e)}
              className="addMedias">

              {/* Uploader un média */}

              <div class="form-group">
                <label for="InputFile">Uploader un média</label>
                <input 
                  type="file" 
                  onChange={(e) => this.setState({file: e.target.files[0]})}></input>
              </div>

              <button
                type="submit"
                className="btn btn-outline-dark">
                Upload
              </button>
            </form>
          </div>


            {/* Checkbox des tags */}

            <div class="form-group">
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customCheck1" checked=""></input>
                <label class="custom-control-label" for="customCheck1">Check this custom checkbox</label>
              </div>
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customCheck2" disabled=""></input>
                <label class="custom-control-label" for="customCheck2">Disabled custom checkbox</label>
              </div>
            </div>

            <input
              type="submit"
              className="btn btn-outline-dark"
              value="Créer un média"
            ></input>


        </div>
        <div className="mediasList">
          <h3>Liste des médias :</h3>
          {this.state.medias && 
          this.state.medias.map((media) => {
            return (
              
              <button 
              onClick={() => this.getMediaId(media.id, media.name)}>

                <img 
                  src={`http://${media.url}`} 
                  alt={media.name}/>
                <p>{media.id}: {media.name}</p>
                <button 
                  className="btn btn-outline-danger"
                  onClick={() => this.handleDelete(media.id)}>
                    <i className="fas fa-trash-alt"></i>
                </button>

              </button>

            )
          })}
        </div>
      </div>
    )
  }
}
