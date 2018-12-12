const models = require("../models")
const Events = models.Event

module.exports = {

  index : function(req, res, next) {
    Events.findAll()
    .then((events) => {
      res.json({events})
    })
    .catch((err) => res.json("Erreur lors de l'index des événements", err))
  },

  create: function(req, res, next) {
    Events.create({
        title : req.body.title,
        description: req.body.description,
        type : req.body.type
    })
    .then((newEvent) => {
      res.json({newEvent})
    })
    .catch((err) => res.json("Erreur lors de la création d'un événement", err))
  },

  edit: function(req, res, next) {
    Events.findByPk(req.params.id)
    .then((event) => {
      if(event){
        if(req.body.title && req.body.description && req.body.type){
          event.title = req.body.title;
          event.description = req.body.description;
          event.type = req.body.type;
          event.save()
          .then((updatedEvent) => {
            res.json({event: updatedEvent})
          })
          .catch((error) => res.status(500).json({message: "Erreur lors de la modification d'un événement."}))
        } else {
          res.status(500).json({message: "name cannot be blank"})
        }
      } else {
        res.status(404).json({message: `L'événement' correspondant à l'id : ${req.params.id} n'existe pas.` })
      }
    })
    .catch((error) => res.status(500).json({message: "Erreur lors de la recherche d'un évenement avant modification"}))
  },

  delete: function(req, res, next) {
    Events.findByPk(req.params.id)
    .then((event) => {
      if(event){
        event.destroy()
        .then((event) => res.json({message: "L'événement a été supprimé."}))
        .catch((err) => res.status(500).json({message: "Erreur lors de la suppression d'un événement."}))
      } else {
        res.status(404).json({message : `L'événement correspondant à l'id : ${req.params.id} n'existe pas.`})
      }
    })
    .catch((err) => res.status(500).json({message: "Erreur lors de la recherche d'un évenement avant suppression."}))
  }
}