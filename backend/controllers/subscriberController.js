const models = require("../models");
const Subscriber = models.Subscriber;

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
      res.json({newSubscriber})
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