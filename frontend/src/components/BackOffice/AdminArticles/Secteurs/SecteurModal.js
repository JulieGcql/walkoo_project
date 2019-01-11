import React, { Component } from 'react'
import Axios from 'axios';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';

export default class SecteurModal extends Component {
  state = {
    title:"",
    description:"",
  }

  componentDidMount = () => {
    this.setState({title: this.props.title, description: this.props.description})
  }
  
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleChangeDescription = (value) => {
    this.setState({description: value})
  }

  handleModify = (id) => {
    Axios.put(`/sectors/edit/${id}`, {
      title: this.state.title,
      description: this.state.description,
      mediaId: this.props.mediaId
    })
    .then((res) => {
      this.props.close()
    })
    .catch((err) => alert("Erreur lors de la modification"))
  }

  render() {
    return (
      <div>
        <div class="modal">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Modification</h5>
              </div>

              <div class="modal-body">
              
                <form className="SecteurForm">

                <label 
                  className="col-form-label"
                  >Nouveau titre :
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
                  >Nouvelle description :
                </label>

                  <ReactQuill 
                required
                id="description"
                className="description"
                value={this.state.description}
                onChange={(value) => this.handleChangeDescription(value)}
              />

                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-outline-primary" onClick={() => this.handleModify(this.props.id)}>Modifier</button>
                <button type="button" class="btn btn-outline-secondary" data-dismiss="modal" onClick={this.props.close}>Quitter</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
