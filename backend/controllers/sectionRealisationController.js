const models = require("../models")
const SectionRealisation = models.SectionRealisation

module.exports = {

    index : function(req, res, next) {
        SectionRealisation.findAll({include : ["backgroundImage"]})
            .then((realisations) => {
                res.json({realisations})
            })
            .catch((err) => res.json("Erreur lors de l'index des section sectionRealisation", err))
    },

    create: function(req, res, next) {
        SectionRealisation.create({
            mediaId : req.body.mediaId,
        })
            .then((newSectionRealisation) => {
                res.json({newSectionRealisation})
            })
            .catch((err) => res.json("Erreur lors de la création d'une nouvelle section sectionRealisation", err))
    },

    show: function(req, res, next) {
        SectionRealisation.findByPk(req.params.id)
            .then((sectionRealisation) => {
                if(sectionRealisation){
                    res.json({sectionRealisation})
                } else {
                    res.status(404).json({message: `La section sectionRealisation correspondant a l'id : ${req.params.id} 'existe pas.`})
                }
            })
            .catch((error) => res.status(500).json({message: "Erreur lors de la recherche la section sectionRealisation avant l'affichage."}))
    },


    edit: function(req, res, next) {
        SectionRealisation.findByPk(req.params.id)
            .then((sectionRealisation) => {
                if(sectionRealisation){
                    if(req.body.mediaId){
                        sectionRealisation.mediaId = req.body.mediaId,
                        sectionRealisation.save()
                            .then((updatedRealisation) => {
                                res.json({sectionRealisation: updatedRealisation})
                            })
                            .catch((error) => res.status(500).json({message: "Erreur lors de la modifiction d'une sectionRealisation."}))
                    } else {
                        res.status(500).json({message: "Un champ ne peut pas etre vide"})
                    }
                } else {
                    res.status(404).json({message: `La sectionRealisation correspondant à l'id : ${req.params.id} n'existe pas.` })
                }
            })
            .catch((error) => res.status(500).json({message: "Erreur lors de la recherche du secteur avant modification"}))
    },

    delete: function(req, res, next) {
        SectionRealisation.findByPk(req.params.id)
            .then((sectionRealisation) => {
                if(sectionRealisation){
                    sectionRealisation.destroy()
                        .then((sectionRealisation) => res.json({message: "La section realisation a été supprimé."}))
                        .catch((err) => res.status(500).json({message: "Erreur lors de la suppression de la section realisation."}))
                } else {
                    res.status(404).json({message : `La sectionRealisation correspondant à l'id : ${req.params.id} n'existe pas.`})
                }

            })
            .catch((err) => res.status(500).json({message: "Erreur lors de la recherche de la section realisation avant suppression."}))
    }

}