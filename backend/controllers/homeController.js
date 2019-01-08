const models = require("../models")
const Home = models.Home

module.exports = {

  index : function(req, res, next) {
    Home.findAll()
    .then((home) => {
      const homeData = home[0]
      res.json({homeData})
    })
    .catch((err) => res.json("Erreur lors de l'index de l'accueil", err))
  },

  
  edit: function(req, res, next) {
    Home.findAll()
    .then((home) => {
      if(home[0]){
        if( req.body.subtitle ){
          home[0].subtitle = req.body.subtitle;
          
          home[0].save()
          .then((updatedHome) => {
            res.json({home: updatedHome})
          })
          .catch((error) => res.status(500).json({message: "Erreur lors de la modification de l'accueil"}))
        } else {
          res.status(500).json({message: "name cannot be blank"})
        }
      } else {
        res.status(404).json({message: `L'événement' correspondant à l'id : ${req.params.id} n'existe pas.` })
      }
    })
    .catch((error) => res.status(500).json({message: "Erreur lors de la recherche d'un évenement avant modification"}))
  },

}