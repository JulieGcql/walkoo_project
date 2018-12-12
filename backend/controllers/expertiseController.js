const models = require("../models")
const Expertise = models.Configuration

module.exports = {

  index : function(req, res, next) {
    Expertise.findAll()
    .then((expertise) => {
      res.json({expertise})
    })
    .catch((err) => res.json("Erreur lors de l'index de l'expertise", err))
  },

  create: function(req, res, next) {
    Expertise.create({
      expertiseParagraph1 : req.body.expertiseParagraph1,
      expertiseParagraphe2 : req.body.expertiseParagraphe2,
      expertiseImageId: req.body.expertiseImageId
    })
    .then((newExpertise) => {
      res.json({newExpertise})
    })
    .catch((err) => res.json("Erreur lors de la création d'une expertise", err))
  },

  edit: function(req, res, next) {
    Expertise.findByPk(req.params.id)
    .then((expertise) => {
      if(expertise){
        if(req.body.expertiseParagraph1 && req.body.expertiseParagraphe2 && req.body.expertiseImageId){
          expertise.expertiseParagraph1 = req.body.expertiseParagraph1;
          expertise.expertiseParagraphe2 = req.body.expertiseParagraphe2;
          expertise.expertiseImageId = req.body.expertiseImageId;
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
  }
}