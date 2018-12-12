const models = require("../models")
const Sector = models.Sector

module.exports = {

  index : function(req, res, next) {
    Sector.findAll({include : ["picto"]})
    .then((sectors) => {
      res.json({sectors})
    })
    .catch((err) => res.json("Erreur lors de l'index des secteurs", err))
  },

  show: function(req, res, next) {
    Sector.findByPk(req.params.id, {include: ["picto"]})
    .then((secteur) => {
      if(secteur){
        res.json({secteur})
      } else {
        res.status(404).json({message: `Le secteur correspondant a l'id : ${req.params.id} 'existe pas.`})
      }
    })
    .catch((error) => res.status(500).json({message: "Erreur lors de la recherche des secteurs avant l'affichage."}))
  },

  create: function(req, res, next) {
    Sector.create({
      mediaId : req.body.mediaId,
      title : req.body.title,
      description: req.body.description
    })
    .then((newSector) => {
      res.json({message: "Le secteur a été créé.", newSector})
    })
    .catch((err) => res.json("Erreur lors de la création d'un secteur", err))
  },

  edit: function(req, res, next) {
    Sector.findByPk(req.params.id)
    .then((secteur) => {
      if(secteur){
        if(req.body.mediaId && req.body.title && req.body.description){
          secteur.mediaId = req.body.mediaId;
          secteur.title = req.body.title;
          secteur.description = req.body.description;
          secteur.save()
          .then((updatedSector) => {
            res.json({secteur: updatedSector})
          })
          .catch((error) => res.status(500).json({message: "Erreur lors de la modifiction d'un secteur."}))
        } else {
          res.status(500).json({message: "name cannot be blank"})
        }
      } else {
        res.status(404).json({message: `Le secteur correspondant à l'id : ${req.params.id} n'existe pas.` })
      }
    })
    .catch((error) => res.status(500).json({message: "Erreur lors de la recherche du secteur avant modification"}))
  },

  delete: function(req, res, next) {
    Sector.findByPk(req.params.id)
    .then((sector) => {
      if(sector){
        sector.destroy()
        .then((sector) => res.json({message: "Le secteur a été supprimé."}))
        .catch((err) => res.status(500).json({message: "Erreur lors de la suppression du secteur."}))
      } else {
        res.status(404).json({message : `Le secteur correspondant à l'id : ${req.params.id} n'existe pas.`})
      }
    })
    .catch((err) => res.status(500).json({message: "Erreur lors de la recherche du secteur avant suppression."}))
  }
}