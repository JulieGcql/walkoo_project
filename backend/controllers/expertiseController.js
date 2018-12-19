const models = require("../models")
const Expertise = models.Expertise

module.exports = {

  index : function(req, res, next) {
    Expertise.findAll({include : ["image"]})
    .then((expertise) => {
      res.json({expertise})
    })
    .catch((err) => res.json("Erreur lors de l'index de l'expertise", err))
  },

  create: function(req, res, next) {
    Expertise.create({
      paragraphOne : req.body.paragraphOne,
      paragraphTwo : req.body.paragraphTwo,
      mediaId: req.body.mediaId
    })
    .then((newExpertise) => {
      res.json({newExpertise})
    })
    .catch((err) => res.json("Erreur lors de la création d'une expertise", err))
  },

  edit: function(req, res, next) {
    Expertise.findByPk(req.params.id, {include : ["image"]})
    .then((expertise) => {
      if(expertise){
        if(req.body.paragraphOne && req.body.paragraphTwo && req.body.mediaId){
          expertise.paragraphOne = req.body.paragraphOne;
          expertise.paragraphTwo = req.body.paragraphTwo;
          expertise.mediaId = req.body.mediaId;
          expertise.save()
          .then((updatedExpertise) => {
            res.json({expertise: updatedExpertise})
          })
          .catch((error) => res.status(500).json({message: "Erreur lors de la modifiction d'une expertise."}))
        } else {
          res.status(500).json({message: "name cannot be blank"})
        }
      } else {
        res.status(404).json({message: `L'expertise correspondant à l'id : ${req.params.id} n'existe pas.` })
      }
    })
    .catch((error) => res.status(500).json({message: "Erreur lors de la recherche d'un expertise avant modification"}))
  },

  delete: function(req, res, next) {
    Expertise.findByPk(req.params.id)
    .then((expertise) => {
      if(expertise){
        expertise.destroy()
        .then((expertise) => res.json({message: "L'expertise a été supprimé."}))
        .catch((err) => res.status(500).json({message: "Erreur lors de la suppression de l'expertise."}))
      } else {
        res.status(404).json({message : `L'expertise correspondant à l'id : ${req.params.id} n'existe pas.`})
      }
    })
    .catch((err) => res.status(500).json({message: "Erreur lors de la recherche de l'expertise avant suppression."}))
  }
}