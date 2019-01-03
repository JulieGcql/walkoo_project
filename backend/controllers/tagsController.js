const models = require("../models")
const Tag = models.Tag
const Media = models.Media

module.exports = {
  index: function(req, res, next) {
    Tag.findAll()
    .then((tags) => {
      res.json({tags})
    })
    .catch((error) => res.status(500).json({message: error}))
  },

  show: function(req, res, next) {
    Tag.findByPk(req.params.id, {include: ["medias"]})
    .then((tag) => {
      if(tag){
        res.json({tag})
      } else {
        res.status(404).json({message: `Tag does not exist with id: ${req.params.id}`})
      }
    })
    .catch((error) => res.status(500).json({message: error}))
  },
  getSecteurMedia: function(req, res, next) {
    Tag.findOne({where :{name: "secteur"}, include: ["medias"]})
    .then((tag) => {
      if(tag){
        res.json({tag})
      } else {
        res.status(404).json({message: `Tag does not exist with name secteur`})
      }
    })
    .catch((error) => res.status(500).json({message: error}))
  },

  getTechnologyMedia: function(req, res, next) {
    Tag.findOne({where :{name: "technologie"}, include: ["medias"]})
    .then((tag) => {
      if(tag){
        res.json({tag})
      } else {
        res.status(404).json({message: `Tag does not exist with name technologie`})
      }
    })
    .catch((error) => res.status(500).json({message: error}))
  },
  
  getConfigurationMedia: function(req, res, next) {
    Tag.findOne({where :{name: "logo"}, include: ["medias"]})
    .then((tag) => {
      if(tag){
        res.json({tag})
      } else {
        res.status(404).json({message: `Tag does not exist with name logo`})
      }
    })
    .catch((error) => res.status(500).json({message: error}))
  },
  
  create: function(req, res, next) {
    if(req.body.name){
      Tag.create({
        name: req.body.name
      })
      .then((newTag) => {
        res.json({tag: newTag})
      })
      .catch((error) => res.status(500).json({message: error}))
    } else {
      res.status(500).json({message: "name cannot be blank"})
    }
  },

  edit: function(req, res, next) {
    Tag.findByPk(req.params.id)
    .then((tag) => {
      if(tag){
        if(req.body.name){
          tag.name = req.body.name;
          tag.save()
          .then((updatedTag) => {
            res.json({tag: updatedTag})
          })
          .catch((error) => res.status(500).json({message: error}))
        } else {
          res.status(500).json({message: "name cannot be blank"})
        }
      } else {
        res.status(404).json({message: `Tag does not exist with id: ${req.params.id}` })
      }
    })
    .catch((error) => res.status(500).json({message: error}))
  },

  delete: function(req, res, next) {
    Tag.findByPk(req.params.id)
    .then((tag) => {
      if(tag){
        tag.setMedias([])
        .then((result) => {
          tag.destroy()
          .then((result) => res.json({message: 'Tag has been deleted'}))
          .catch((error) => res.status(500).json({message: error}))
        })
        .catch((error) => res.status(500).json({message: error}))
      } else {
        res.status(404).json({message: `Tag does not exist with id: ${req.params.id}`})
      }
    })
    .catch((error) => res.status(500).json({message: error}))
  }
}