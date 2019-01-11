const models = require("../models")
const SectionTechnology = models.SectionTechnology

module.exports = {

    index: function(req, res, next) {
        SectionTechnology.findAll()
            .then((sectionTechnology) => {
                res.json({sectionTechnology})
            })
            .catch((err) => res.json("Erreur lors de l'index de technologie", err))
    },

    create: function(req, res,) {
        SectionTechnology.create({
            subtitle : req.body.subtitle,
            description: req.body.description,
        })
            .then((newTechnology) => {
                res.json({newTechnology})
            })
            .catch((err) => res.json("Erreur lors de la création d'un élément dans section technologie", err))
    },

    edit: function(req, res, next) {
        SectionTechnology.findByPk(req.params.id)
            .then((sectionTechnology) => {
                if(sectionTechnology){
                    if(req.body.subtitle && req.body.description){
                        sectionTechnology.subtitle = req.body.subtitle;
                        sectionTechnology.description = req.body.description;
                        sectionTechnology.save()
                            .then((updatedSectionTechnology) => {
                                res.json({sectionTechnology: updatedSectionTechnology})
                            })
                            .catch((error) => res.status(500).json({message: "Erreur lors de la modifiction d'un" +
                                    " élément dans section technologie."}))
                    } else {
                        res.status(500).json({message: "name cannot be blank"})
                    }
                } else {
                    res.status(404).json({message: `Un élément dans section technologie correspondant à l'id : ${req.params.id} n'existe pas.` })
                }
            })
            .catch((error) => res.status(500).json({message: "Erreur lors de la recherche d'un élément dans section technologie avant modification"}))
    },

    delete: function(req, res, next) {
        SectionTechnology.findByPk(req.params.id)
            .then((sectionTechnology) => {
                if(sectionTechnology){
                    sectionTechnology.destroy()
                        .then((sectionTechnology) => res.json({message: "Un élément dans section technologie a été supprimé."}))
                        .catch((err) => res.status(500).json({message: "Erreur lors de la suppression d'un élément dans section technologie."}))
                } else {
                    res.status(404).json({message : `Un élément dans section technologie correspondant à l'id : ${req.params.id} n'existe pas.`})
                }
            })
            .catch((err) => res.status(500).json({message: "Erreur lors de la recherche d'un élément dans section technologie avant suppression."}))
    }

}