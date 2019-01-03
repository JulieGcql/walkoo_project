import React, { Component } from 'react'
import './MediasSalons.scss'
import axios from 'axios'

export default class MediasSalon extends Component {
  state = {
    events: [],
    title: "",
    type: "",
    description: "",

  }


  componentDidMount() {
    this.getEvents()
  }
  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({ [e.target.name]: e.target.value })
  }


  handleDelete = (id) => {
    if (window.confirm("Voulez-vous supprimer un événement?")) {
      axios.delete(`/events/delete/${id}`)
        .then((res) => {
          this.getEvents()
        })
        .catch((err) => console.log(err))
    }
  }

  createEvent = (e) => {
    if (this.state.type !== '') {
      e.preventDefault()
      axios.post('/events/create', {
        title: this.state.title,
        description: this.state.description,
        type: this.state.type
      })
        .then((res) => {
          alert("Le media a été créé.")
          this.getEvents()
        })
        .catch((err) => console.log(err))
    } else {
      e.preventDefault()
      alert("Selectionnez un type.")
    }
  }



  getEvents = () => {
    axios.get('/events')
      .then((res) => {
        this.setState({ events: res.data.events })
        console.log(res.data)
      })
      .catch((err) => console.log(err))
  }


  render() {
    return (
      <div>
        <form
          onSubmit={(e) => this.createEvent(e)}
          className="SecteurForm">

          <h3 className="hugoTitleMS">Création d'un évènement :</h3>

          <label
            className="col-form-label createEventMargin"
          >Titre :
            </label>

          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={(e) => this.handleChange(e)}
            className="form-control "
            required
          ></input>

          <label
            className="col-form-label createEventMargin"
          >Description :
            </label>

          <textarea
            type="text"
            name="description"
            value={this.state.description}
            onChange={(e) => this.handleChange(e)}
            className="form-control"
            rows="5"
          ></textarea>

          <div className="form-group">
            <label htmlFor="type"
            className="createEventMargin"
            >Type :</label>
            <select className="form-control" onChange={(e) => this.handleChange(e)} name="type" id="type">
              <option value="">Selectionnez le type</option>
              <option value="media">Media</option>
              <option value="salon">Salon</option>

            </select>
          </div>

          <input
            type="submit"
            value="Créer un évènement"
            className="btn btn-outline-dark"
          ></input>

        </form>


        <div className="Listes">

          <div className="listeS">

            <h3 >Liste des salons</h3>

            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Titre</th>
                  <th scope="col">Description</th>
                  <th scope="col">Supprimer</th>
                </tr>
              </thead>
            


            {this.state.events && this.state.events.map((event, index) => {
              return (

                event.type === "salon" &&
                <tbody key={index}>
                  <tr>
                    <th scope="row">{event.title}</th>
                    <td>{event.description} </td>
                    <td><button 
                      className="btn btn-outline-danger"
                      onClick={() => this.handleDelete(event.id)}>
                        <i className="fas fa-trash-alt"></i>
                    </button></td>
                  </tr>
                </tbody>

              )})}
            </table>
          </div>
        


        <div className="listeM">
          <h3 >Liste des media</h3>

          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Titre</th>
                <th scope="col">Description</th>
                <th scope="col">Supprimer</th>
              </tr>
            </thead>
          


          {this.state.events && this.state.events.map((event, index) => {
            return (

              event.type === "media" &&
              <tbody key={index}>
                <tr>
                  <th scope="row">{event.title}</th>
                  <td>{event.description} </td>
                  <td><button 
                      className="btn btn-outline-danger"
                      onClick={() => this.handleDelete(event.id)}>
                        <i className="fas fa-trash-alt"></i>
                    </button></td>
                </tr>
              </tbody>

            )
          })}
          </table>
          </div>
        </div>
      </div>





    )
  }
}


