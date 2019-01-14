const models = require('../models');
const Realisation = models.Realisation;

Realisation.bulkCreate([
    {
        title: "PRESSE ET MÉDIAS",
        url: "https://www.walkoocitymap.com/fr/",
        description: "Walkoo City Map est la carte collaborative des nouvelles randonnées urbaines. Application dédiée à l’exploration de la ville à pied, elle permet de suivre des parcours selon ses centres d’intérêt, de découvrir le centre des villes mais aussi leur périphérie et de contribuer à faire voir la ville autrement.",
    },
    {
        title: "PRESSE ET MÉDIAS",
        url: "",
        description: "WALKOO a conçu PressMap®, une solution performante de géolocalisation des articles et des notifications publicitaires pour les méedias et les éditeurs. Nouvelle application ou module intégré à une application existante, la solution pm permet de relever le défi d'une information personnalisée pour chaque lecteur.",

    },{
        title: "EMPLOI",
        url: "",
        description: "Localiser les offres d’emploi les plus proches de son domicile est une demande croissante des intérimaires et des demandeurs d’emploi. Pour les entreprises, la proximité est aussi une garantie de pourvoir plus rapidement les postes vacants et d’améliorer la qualité de vie au travail.",
    },{
        title: "CAMPUS",
        url: "",
        description: "Nouvelle application ou module intégré à une application existante, SmartUniv® permet de délivrer aux étudiants et au personnel du Campus des informations localisées et personnalisées sur les services, les activités et les installations ou encore le patrimoine de l'établissement, au bon endroit et au bon moment.",
    },{
        title: "PRÉVENTION SANTÉ",
        url: "",
        description: "Mieux Vivre City Guide® s’adresse aux acteurs institutionnels de la prévention santé et aux entreprises qui veulent inciter le plus grand nombre à adopter des habitudes de vies saines, actives et responsables grâce à des conseils et des incitations personnalisées au quotidien.",
    },{
        title: "VALORISATION DU PATRIMOINE",
        url: "",
        description: "Qu’il s’agisse du patrimoine bâti ou naturel, dans les terres ou sur le littoral, Walkoo propose aux responsables de la valorisation des Parcs naturels régionaux une solution sur mesure et dynamique, adaptée à la diversité de leurs territoires, pour engager les publics aux différentes périodes de visite.",
    },{
        title: "PATRIMOINE CINÉMATOGRAPHIQUE",
        url: "",
        description: "Qu'il s'agisse de parcours construits sur une thématique, un réalisateur, un film ou encore l'histoire d'un tournage, CinéExplo® est l’application dédiée à la valorisation du patrimoine cinématographique. L'application récompense l'exploration des différents lieux par des points échangeables contre des cadeaux.",
    },{
        title: "FESTIVALS",
        url: "",
        description: "Chaque année, à l’occasion de la commémoration de la naissance de Marcel Pagnol, la Ville d’Aubagne propose une journée thématique et un parcours dans le centre ville. Afin d’ajouter une dimension ludique à l’événement à l’événement et d’accroître sa visibilité, ces contenus ont été intégrés sur Walkoo City Map.",
    },{
        title: "WALKOO ON DEMAND",
        url: "",
        description: "La plateforme de Walkoo permet de configurer des solutions adaptées aux besoins de chaque contexte. Festival de Street Art, Grand Événement culturel ou sportif, Smart City… Walkoo s’engage à inventer pour vous la réponse qui vous permettra de toujours délivrer vos contenus… au bon endroit, au bon moment, pour chaque utilisateur.",
    },
])
    .then((realisations) => {
        console.log(realisations)
    })
    .catch((err) => console.log("Error while create realisation : ", err));