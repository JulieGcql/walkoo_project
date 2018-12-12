import React, { Component } from 'react'
import "./AdminContacts.scss"
import axios from 'axios';

export default class AdminContacts extends Component {
  state = {
    subscribers: []
  }

  componentDidMount() {
   this.getSubscribers()
  }

  handleDelete = (id) => {
    if(window.confirm("Voulez-vous supprimer le contact ?")){
      axios.delete(`/subscribers/delete/${id}`)
      .then((res) => {
        alert(res.data.message)
        this.getSubscribers()
      })
      .catch((err) => console.log(err))
    }
  }

  getSubscribers = () => {
    axios.get('/subscribers')
    .then((res) => this.setState({subscribers: res.data.subscribers}))
    .catch((err) => console.log("Erreur lors de l'obtention des contacts"))
  }

  render() {
    return (
      <div className="ContactAdmin">
        <h1>Contacts</h1>

      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Nom</th>
            <th scope="col">Société</th>
            <th scope="col">Email</th>
            <th scope="col">Téléphone</th>
            <th scope="col">Secteur</th>
            <th scope="col">Demo</th>
            <th scope="col">Message</th>
            <th scope="col">Suppr</th>
          </tr>
        </thead>

        {this.state.subscribers &&

        this.state.subscribers.map((subscriber, index) => {
          return (

            <tbody key={index}>
              <tr>

                <th scope="row">{subscriber.firstName}</th>
                <td>{subscriber.companyName}</td>
                <td>{subscriber.email}</td>
                <td>{subscriber.phone}</td>
                <td>{subscriber.activitySector}</td>
                {subscriber.requestDemo ?
                  <td>Oui</td>
                  : 
                  <td>Non</td>
                }
                <td>{subscriber.message}</td>
                <td><button 
                  className="btn btn-outline-danger"
                  onClick={() => this.handleDelete(subscriber.id)}>
                    <i className="fas fa-trash-alt"></i>
                </button></td>

              </tr>
            </tbody>

          )
        })

        }
      </table>

      </div>
    )
  }
}
