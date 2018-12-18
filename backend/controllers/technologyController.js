const models = require("../models")
const Technology = models.Technology

module.exports = {

    index: function(req, res, next) {
        Technology.findAll()
        .then((technology) => {
          res.json({technology})
        })
        .catch((err) => res.json("Erreur lors de l'index de technologie", err))
      },

      create: function(req, res, next) {
        Technology.create({
          title : req.body.title,
          description: req.body.description,
          url: req.body.url,
          mediaId : req.body.mediaId,
        })
        .then((newTechnology) => {
          res.json({newTechnology})
        })
        .catch((err) => res.json("Erreur lors de la création d'un élément dans technologie", err))
      },

      edit: function(req, res, next) {
        Technology.findByPk(req.params.id)
        .then((technology) => {
          if(technology){
            if(req.body.mediaId && req.body.title && req.body.description && req.body.url){
              technology.mediaId = req.body.mediaId;
              technology.title = req.body.title;
              technology.description = req.body.description;
              technology.url = req.body.url;
              technology.save()
              .then((updatedTechnology) => {
                res.json({technology: updatedTechnology})
              })
              .catch((error) => res.status(500).json({message: "Erreur lors de la modifiction d'un élément dans technologie."}))
            } else {
              res.status(500).json({message: "name cannot be blank"})
            }
          } else {
            res.status(404).json({message: `Un élément dans technologie correspondant à l'id : ${req.params.id} n'existe pas.` })
          }
        })
        .catch((error) => res.status(500).json({message: "Erreur lors de la recherche d'un élément dans technologie avant modification"}))
      },

      delete: function(req, res, next) {
        Technology.findByPk(req.params.id)
        .then((technology) => {
          if(technology){
            technology.destroy()
            .then((technology) => res.json({message: "Un élément dans technologie a été supprimé."}))
            .catch((err) => res.status(500).json({message: "Erreur lors de la suppression d'un élément dans technologie."}))
          } else {
            res.status(404).json({message : `Un élément dans technologie correspondant à l'id : ${req.params.id} n'existe pas.`})
          }
        })
        .catch((err) => res.status(500).json({message: "Erreur lors de la recherche d'un élément dans technologie avant suppression."}))
      }

}