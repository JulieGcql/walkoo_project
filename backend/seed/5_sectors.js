const models = require('../models');
const Sector = models.Sector;

Sector.bulkCreate([
  {
    mediaId: 10,
    title: "Patrimoine",
    description: "Qu’il s’agisse de patrimoine bâti, naturel, immatériel ou de création contemporaine, la personnalisation est une tendance forte de la médiation culturelle.Grâce à l’approche contextuelle, Walkoo est en mesure de : - créer un flux de contenus localisés et actualisés, des guides d’expositions ou encore des parcours sonores dans la ville - personnaliser la forme des articles pour différents publics (audio, vidéo…) - imaginer de nouvelles formes de diffusion inspirées des nouveaux usages et créer des chatbots. WALKOO scénarise vos contenus pour renouveler l’intérêt de vos publics actuels et conquérir ceux de demain."
  },
  {
    mediaId: 7,
    title: "Evenements",
    description: "Qu’il s’agisse de festivals de street art, de rendez-vous gastronomiques, de grands événements culturels ou sportifs, d’animation d’un centre-ville historique ou de la Smart City, la personnalisation est une tendance forte de l’événementiel. Grâce à l’approche contextuelle, Walkoo est en mesure de : - créer un flux de contenus localisés et actualisés, des guides ou encore des parcours dans la ville - personnaliser la forme des articles pour différents publics (audio, vidéo…) - imaginer de nouvelles formes de diffusion inspirées des nouveaux usages et créer des chatbots. WALKOO permet de localiser les contenus de vos événements tout en tenant compte des préférences de chaque utilisateur et des éléments déterminants de son environnement (météo, qualité de l’air, flux d’actualités…). Délivrées au bon endroit et au bon moment, l’information s'adapte aux attentes de chaque participant pour renouveler l’intérêt de vos publics actuels et conquérir ceux de demain. "
  },
  {
    mediaId: 8,
    title: "Forme & Bien-être",
    description: "La personnalisation des conseils et des informations est une des clés de l’efficacité des messages de prévention santé. Grâce à l’approche contextuelle, Walkoo est en mesure de - créer un flux de conseils localisés et actualisés et même des démonstrations d’exercices - personnaliser la forme des conseils pour différents publics (audio, vidéo…)  - imaginer de nouvelles formes de diffusion inspirées des nouveaux usages et créer des chatbots. WALKOO permet de diffuser des informations et des conseils tout en tenant compte des besoins de chaque utilisateur, identifiés à partir de ses bilans d’activité. Grâce aux notifications ludiques et informées par les connaissances scientifiques les plus récentes, délivrées au bon endroit et au bon moment, les applications conçues par WALKOO stimulent la motivation des utilisateurs pour les guider vers l’adoption d’habitudes de vie actives, favorables à la forme et au bien-être."
  },
  {
    mediaId: 11,
    title: "Université",
    description: "La personnalisation de l’info est la première demande des usagers de votre campus. Grâce à l’approche contextuelle, Walkoo est en mesure de - créer un flux de contenus localisés et actualisés, de l’information pratique nécessaire au quotidien à la communication des activités associatives, culturelles ou sportives de la vie du campus - personnaliser la forme des articles pour différents lectorats (étudiants ou personnel) - imaginer de nouvelles formes de diffusion inspirées des nouveaux usages et créer des chatbots. Délivrées au bon endroit et au bon moment, l’information s'adapte aux besoins de chaque usager. "
  },
  {
    mediaId: 9,
    title: "Media",
    description: "La personnalisation de l’info est la première demande de vos lecteurs. Grâce à l’approche contextuelle, Walkoo est en mesure de - créer un flux de contenus localisés et actualisés - personnaliser la forme des articles pour différents lectorats (audio, vidéo…) - imaginer de nouvelles formes de diffusion inspirées des nouveaux usages et créer des chatbots.   Le module PRESSMAP peut facilement être intégré à une application existante. Délivrées au bon endroit et au bon moment, information et publicité s'adaptent aux attentes de chaque lecteur. "
  },
])
.then((sector) => {
  console.log(sector)
})
.catch((err) => console.log("Error while create Sector : ", err))