const models = require("../models");
const Subscriber = models.Subscriber;
const nodemailer = require('nodemailer');


const smtpTransport = nodemailer.createTransport({
  host: "smtp.live.com",
  port: 25,
  secure: false,
  auth: {
      user: process.env.DB_MAIL,
      pass: process.env.DB_PASSWORD,
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
        from: process.env.DB_MAIL, // Expediteur
        to: process.env.DB_MAIL, // Destinataire
        subject: "Nouveau Contact", // Sujet
        text: `Vous avez une nouvelle demande de contact de la part de ${req.body.firstName}, son mail est : ${req.body.email} et son numéro de téléphone est : ${req.body.phone}`, // plaintext body
        html: `<p>Vous avez une nouvelle demande de contact de la part de <b>${req.body.firstName}</b>, son mail est : <b>${req.body.email}</b> et son numéro de téléphone est : <b>${req.body.phone}</b></p>` // html body
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