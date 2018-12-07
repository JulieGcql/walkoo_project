import React, { Component } from 'react'
import ContactForm from './ContactForm'
import Backdrop from './Backdrop/Backdrop'
import PopUp from './PopUp/PopUp'

export default class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
      popUpOpen : false
    }
  }

  drawerToggleClickHandler = (e) => {
    this.setState((prevState) => {
      return {popUpOpen : !prevState.popUpOpen}
    })
  }

  backdropClickHandler = () => {
    this.setState({popUpOpen: false})
  }

  render() {
    let backdrop;

    if (this.state.popUpOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }
    return (
      <div>
        <ContactForm click={(e) => this.drawerToggleClickHandler(e)}/>
        <PopUp 
        show={this.state.popUpOpen}
        close={this.backdropClickHandler}/>
        {backdrop}
      </div>
    )
  }
}
