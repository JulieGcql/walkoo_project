import React, { Component } from 'react'
import Axios from 'axios';

export default class ExpertiseModal extends Component {
  state = {
    paragraphOne:"",
    paragraphTwo:"",
  }

  componentDidMount = () => {
    this.setState({paragraphOne: this.props.paragraphOne, paragraphTwo: this.props.paragraphTwo})
  }
  
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleModify = (id) => {
    Axios.put(`/expertise/edit/${id}`, {
      paragraphOne: this.state.paragraphOne,
      paragraphTwo: this.state.paragraphTwo,
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
                <h5 class="modal-paragraphOne">Modification</h5>
              </div>

              <div class="modal-body">
              
                <form className="ExpertiseForm">

                <label 
                  className="col-form-label"
                  >Premier paragraphe :
                </label>

                <input 
                  type="text" 
                  name="paragraphOne" 
                  value={this.state.paragraphOne}
                  onChange={(e) => this.handleChange(e)}
                  className="form-control" 
                  required 
                  ></input>

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
                  rows="8"
                  required 
                  ></textarea>    
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
