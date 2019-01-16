const models = require("../models");
const Subscriber = models.Subscriber;
const nodemailer = require('nodemailer');


const smtpTransport = nodemailer.createTransport({
  host: "ssl0.ovh.net",
  port: 465,
  secure: true,
  auth: {
      user: process.env.ADRESSE_MAIL,
      pass: process.env.ADRESSE_MDP,
  }
});

module.exports = {

  index: function(req, res, next) {
    Subscriber.findAll()
    .then((subscribers) => {
      res.json({subscribers})
    })
    .catch((err) => res.json("Erreur lors de l'index des contacts.", err))
  },

  create: function(req, res, next) {
    let requestDemo = req.body.requestDemo === true ? "Oui" : "Non"
    Subscriber.create({
      firstName : req.body.firstName,
      companyName : req.body.companyName,
      email : req.body.email,
      phone : req.body.phone,
      activitySector : req.body.activitySector,
      requestDemo : req.body.requestDemo || false,
      message : req.body.message
    })
    .then((newSubscriber) => {
      smtpTransport.sendMail({
        from: process.env.ADRESSE_MAIL, // Expediteur
        to: "contact.walkoo@gmail.com", // Destinataire
        subject: "Nouveau Contact", // Sujet
        text: `Vous avez une nouvelle demande de contact : 
          Nom : ${req.body.firstName}, 
          Société : ${req.body.companyName}, 
          Email : ${req.body.email}, 
          Téléphone : ${req.body.phone}, 
          Secteur d'activité : ${req.body.activitySector}, 
          Demo : ${requestDemo}, 
          Message : ${req.body.message}
        `, // plaintext body
        html: `<p>Vous avez une nouvelle demande de contact :</p>
        <ul>
          <li><p>Nom : <b>${req.body.firstName}</b></p></li>
          <li><p>Société : <b>${req.body.companyName}</b></p></li>
          <li><p>Email : <b>${req.body.email}</b></p></li>
          <li><p>Téléphone : <b>${req.body.phone}</b></p></li>
          <li><p>Secteur d'activité : <b>${req.body.activitySector}</b></p></li>
          <li><p>Demo : <b>${requestDemo}</b></p></li>
          <li><p>Message : <b>${req.body.message}</b></p></li>
        </ul>
        ` // html body
      }, (error, response) => {
        if(error){
          console.log(error);
        }else{
          res.send("message sent")
        }
      })
    })
    .catch((err) => res.json("Erreur lors de la création d'un contact.", err))
  },

  delete: function(req, res, next) {
    Subscriber.findByPk(req.params.id)
    .then ((subscriber) => {
      if(subscriber){
        subscriber.destroy()
        .then((subscriber) => res.status(200).json({message : `Le contact a été supprimé.`}))
      } else {
        res.status(404).json({message: `Le contact possedant l'id : ${req.params.id} n'existe pas.`})
      }
    })
    .catch((err) => res.status(500).json({message: "Erreur lors de la suppression d'un contact.", err}))
  }
}