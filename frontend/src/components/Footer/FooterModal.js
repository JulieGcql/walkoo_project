import React, { Component } from 'react';
import Modal from 'react-modal';
import "./FooterModal.scss";



const text = "Politique de Confidentialité et ConditionGénérales d’UtilisationCe texte présente la Politique de Confidentialité et les Conditions Générales d’Utilisation du site www.walkoo.fr. La Politique de Confidentialité et les Conditions Généra le d’Utilisation de WCM sont opérées par la startup Walkoo, ayant pour siège provisoire l’incubateur inter-universitaire Impulse, Maison du Développement Industriel, 38, rue Frédéric Joliot Curie 13013 à Marseille Walkoo exploite dans ce cadre Walkoo, marque française déposée auprès de l’INPI, ainsi que les marques PressMap, SmartCampus, CinéExplo et Walkoo City Map.Le site Walkoo est hébergé par la société OVH, société par actions simplifiée au capital de 500 000 euros, inscrite au RCS de Roubaix sous le numéro 424 761 419, code APE 6202A – N° TVA: FR 22 424 761 419 ayant pour siège social 2, rue Kellermann – 59100 Roubaix.Politique de Confidentialité et ConditionGénérales d’Util\
\
isationCe texte présente la Politique de Confidentialité et les Conditions Générales d’Utilisation du site www.walkoo.fr. La Politique de Confidentialité et les Conditions Généra le d’Utilisation de WCM sont opérées par la startup Walkoo, ayant pour siège provisoire l’incubateur inter-universitaire Impulse, Maison du Développement Industriel, 38, rue Frédéric Joliot Curie 13013 à Marseille Walkoo exploite dans ce cadre Walkoo, marque française déposée auprès de l’INPI, ainsi que les marques PressMap, SmartCampus, CinéExplo et Walkoo City Map.Le site Walkoo est hébergé par la société OVH, société par actions simplifiée au capital de 500 000 euros, inscrite au RCS de Roubaix sous le numéro 424 761 419, code APE 6202A – N° TVA: FR 22 424 761 419 ayant pour siège social 2, rue Kellermann – 59100 Roubaix.Politique de Confidentialité et ConditionGénérales d’UtilisationCe texte présente la Politique de Confidentialité et les Conditions Générales d’Utilisation du site www.walkoo.fr. La Politique de Confidentialité et les Conditions Généra le d’Utilisation de WCM sont opérées par la startup Walkoo, ayant pour siège provisoire l’incubateur inter-universitaire Impulse, Maison du Développement Industriel, 38, rue Frédéric Joliot Curie 13013 à Marseille Walkoo exploite dans ce cadre Walkoo, marque française déposée auprès de l’INPI, ainsi que les marques PressMap, SmartCampus, CinéExplo et Walkoo City Map.Le site Walkoo est hébergé par la société OVH, société par actions simplifiée au capital de 500 000 euros, inscrite au RCS de Roubaix sous le numéro 424 761 419, code APE 6202A – N° TVA: FR 22 424 761 419 ayant pour siège social 2, rue Kellermann – 59100 Roubaix.";

Modal.setAppElement('#root');

export default class FooterModal extends React.Component {
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
          <p className="text">{text}</p>
          <button onClick={this.handleCloseModal}>Revenir au site</button>
        </Modal>
      </div>
    );
  }
}
