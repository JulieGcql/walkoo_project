const models = require('../models');
const SectionTechnology = models.SectionTechnology;

SectionTechnology.bulkCreate([
    {
        subtitle: "Les avantages de la solution Walkoo",
        description: "La solution numérique développée par Walkoo est une plateforme de gestion de contenus que vous administrez en toute autonomie pour les délivrer à votre audience via une application mobile à vos couleurs ou une application partagée à large audience. Grâce à Walkoo, profitez de la connaissance de l’environnement de l’utilisateur et scénarisez vos contenus et notifications pour le guider, l’informer ou l’assister en temps réel. Vous pouvez diffuser tous vos contenus multimédia - texte, audio, musique, image, vidéo - et les actualiser facilement depuis votre compte administrateur dans la plateforme (CMS). Si vous avez déjà une application, vos publics n’auront pas à en télécharger une nouvelle : le module s’intègre à la solution existante. Sinon, vous avez la possibilité d’en concevoir une à votre image. Walkoo vous permet en outre d’héberger vos contenus sur une application partagée à large audience pour accroître leur visibilité. ",
    },
])
    .then((newTechnology) => {
        console.log(newTechnology)
    })
    .catch((err) => console.log(err))