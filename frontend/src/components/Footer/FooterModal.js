import React, { Component } from 'react';
import Modal from 'react-modal';
import "./FooterModal.scss";

Modal.setAppElement('#root');

export default class FooterModal extends Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  
  render () {
    return (
      <div>
        <p onClick={this.handleOpenModal} style={{cursor: 'pointer'}}>Politique de Confidentialité et Conditions Générales d’Utilisation</p>
        <Modal 
          isOpen={this.state.showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleCloseModal}
          className="Modal"
          overlayClassName="Overlay"
        >
          <div className="text" dangerouslySetInnerHTML={createMarkup (this.props.config)}></div>
          <img className="exit_btn" onClick={this.handleCloseModal} src={require('./Pictures/exit.png')} alt="exit modal button"/>
        </Modal>
      </div>
    );
  }
}

function  createMarkup ( stringyfiedHtml ) {
  return { __html :  stringyfiedHtml };
}