const models = require("../models")
const Realisation = models.Realisation

module.exports = {

    index : function(req, res, next) {
        Realisation.findAll()
        .then((realisation) => {
          res.json({realisation})
        })
        .catch((err) => res.json("Erreur lors de l'index des realisation", err))
      },

    create: function(req, res, next) {
        Realisation.create({
          title: req.body.title,
          description: req.body.description,
        //   url: req.body.url,
        })
        .then((newRealisation) => {
          res.json({newRealisation})
        })
        .catch((err) => res.json("Erreur lors de la création d'une nouvelle réalisation", err))
      },

      show: function(req, res, next) {
        Realisation.findByPk(req.params.id)
        .then((réalisation) => {
          if(réalisation){
            res.json({réalisation})
          } else {
            res.status(404).json({message: `La réalisation correspondant a l'id : ${req.params.id} 'existe pas.`})
          }
        })
        .catch((error) => res.status(500).json({message: "Erreur lors de la recherche la réalisation avant l'affichage."}))
      },
    

      edit: function(req, res, next) {
        Realisation.findByPk(req.params.id)
        .then((realisation) => {
          if(realisation){
            if(req.body.title && req.body.description){
              realisation.title = req.body.title;
              realisation.description = req.body.description;
              // realisation.url = req.body.url;
              realisation.save()
              .then((updatedRealisation) => {
                res.json({realisation: updatedRealisation})
              })
              .catch((error) => res.status(500).json({message: "Erreur lors de la modifiction d'une realisation."}))
            } else {
              res.status(500).json({message: "Un champ ne peut pas etre vide"})
            }
          } else {
            res.status(404).json({message: `La realisation correspondant à l'id : ${req.params.id} n'existe pas.` })
          }
        })
        .catch((error) => res.status(500).json({message: "Erreur lors de la recherche du secteur avant modification"}))
      },

      delete: function(req, res, next) {
        Realisation.findByPk(req.params.id)
        .then((realisation) => {
          if(realisation){
            realisation.destroy()
            .then((realisation) => res.json({message: "La realisation a été supprimé."}))
            .catch((err) => res.status(500).json({message: "Erreur lors de la suppression de la realisation."}))
          } else {
            res.status(404).json({message : `La realisation correspondant à l'id : ${req.params.id} n'existe pas.`})
          }

        })
        .catch((err) => res.status(500).json({message: "Erreur lors de la recherche de la realisation avant suppression."}))
      }
    
}