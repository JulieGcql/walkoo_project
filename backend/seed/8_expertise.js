const models = require('../models');
const Expertise = models.Expertise;

Expertise.create(
    {
        paragraphOne: "<p>Fondée sur les connaissances issues des sciences du comportement, l’approche contextuelle permet d’engager une audience de façon réellement efficace en tenant compte de nombreux paramètres : profil et favoris de l’utilisateur, position géographique, date, moment de la journée, qualité de l’air, actualité… Délivrées dans le bon contexte, informations et notifications ne peuvent qu’être bien accueillies !</p>",
        paragraphTwo: "<p>Vos contenus méritent un expert du contexte. Nous vous accompagnons depuis la définition de votre projet jusqu’à son déploiement. Diagnostic, accompagnement personnalisé, évaluation. Bienvenue chez WALKOO.</p>",
        mediaId: 2,
    },

)
    .then((createdExpertise) => {
        console.log(createdExpertise)
    })
    .catch((err) => console.log("Error while create expertise : ", err));