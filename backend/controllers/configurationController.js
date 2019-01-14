const models = require("../models")
const Configuration = models.Configuration

module.exports = {

  index : function(req, res, next) {
    Configuration.findAll({include : ["logo"]})
    .then((configurations) => {
      res.json({configurations})
    })
    .catch((err) => res.json("Erreur lors de l'index des configurations", err))
  },

  create: function(req, res, next) {
    Configuration.create({
      title: req.body.title,
      mediaId: req.body.mediaId,
      phone: req.body.phone,
      twitter: req.body.twitter,
      linkedin: req.body.linkedin,
      rgpd: req.body.rgpd,
      metaTitle: req.body.metaTitle,
      metaDescription: req.body.metaDescription,
      metaKeyword: req.body.metaKeyword,
      metaImage: req.body.metaImage
    })
    .then((newConfiguration) => {
      res.json({message: "La configuration a été créé.", newConfiguration})
    })
    .catch((err) => res.json("Erreur lors de la création d'une configuration", err))
  },

  edit: function(req, res, next) {
    Configuration.findByPk(req.params.id)
    .then((configuration) => {
      if(configuration){
        if(req.body.title && req.body.mediaId && req.body.phone && req.body.twitter && req.body.linkedin && req.body.rgpd && req.body.metaTitle && req.body.metaDescription && req.body.metaKeyword && req.body.metaImage){
          configuration.title = req.body.title,
          configuration.mediaId = req.body.mediaId,
          configuration.phone = req.body.phone,
          configuration.twitter = req.body.twitter,
          configuration.linkedin = req.body.linkedin,
          configuration.rgpd = req.body.rgpd,
          configuration.metaTitle = req.body.metaTitle,
          configuration.metaDescription = req.body.metaDescription,
          configuration.metaKeyword = req.body.metaKeyword,
          configuration.metaImage = req.body.metaImage
          configuration.save()
          .then((updatedConfiguration) => {
            res.json({configuration: updatedConfiguration})
          })
          .catch((error) => res.status(500).json({message: "Erreur lors de la modification d'une configuration."}))
        } else {
          res.status(500).json({message: "name cannot be blank"})
        }
      } else {
        res.status(404).json({message: `La configuration correspondant à l'id : ${req.params.id} n'existe pas.` })
      }
    })
    .catch((error) => res.status(500).json({message: "Erreur lors de la recherche d'une configuration avant modification"}))
  },
}