const models = require('../models');
const Realisation = models.Realisation;

Realisation.bulkCreate([
    {
        title: "Walk city map",
        url: "https://www.walkoocitymap.com/fr/",
        description: "Suus satis. Quod etiam optime. Vos ite post eum, fistulae, nunquam vivum exire ab ea. Sed cum hoc ... excidit tibi in cibo aut in potu, aut: olefac Elegantioris non sit ... triginta sex horae post ... Poof. Vir aetatis operantes, dura sicut facit ...excidit tibi in cibo aut in potu, aut: olefac Elegantioris non sit ...",
    },
    {
        title: "Aubagne 1895",
        url: "http://www.aubagne.fr/fr/services/sortir-se-cultiver/evenements/2018/il-etait-une-fois-aubagne-en-1895.html",
        description: "Suus satis. Quod etiam optime. Vos ite post eum, fistulae, nunquam vivum exire ab ea. Sed cum hoc ... excidit tibi in cibo aut in potu, aut: olefac Elegantioris non sit ... triginta sex horae post ... Poof. Vir aetatis operantes, dura sicut facit ...excidit tibi in cibo aut in potu, aut: olefac Elegantioris non sit ...",
    },
    {
        title: "Parcs et jardins d'une grande ville",
        url: "http://monumentsdemarseille.com/parc-borely",
        description: "Suus satis. Quod etiam optime. Vos ite post eum, fistulae, nunquam vivum exire ab ea. Sed cum hoc ... excidit tibi in cibo aut in potu, aut: olefac Elegantioris non sit ... triginta sex horae post ... Poof. Vir aetatis operantes, dura sicut facit ...excidit tibi in cibo aut in potu, aut: olefac Elegantioris non sit ...",
    },
    {
        title: "Parc naturel régional",
        url: "http://www.marseilletourisme.fr/les-calanques/",
        description: "Suus satis. Quod etiam optime. Vos ite post eum, fistulae, nunquam vivum exire ab ea. Sed cum hoc ... excidit tibi in cibo aut in potu, aut: olefac Elegantioris non sit ... triginta sex horae post ... Poof. Vir aetatis operantes, dura sicut facit ...excidit tibi in cibo aut in potu, aut: olefac Elegantioris non sit ...",
    },
    {
        title: "Marche active en ville",
        url: "https://www.grazia.fr/beaute/forme-minceur/pratiquer-la-marche-nordique-en-ville-c-est-possible-811555",
        description: "Suus satis. Quod etiam optime. Vos ite post eum, fistulae, nunquam vivum exire ab ea. Sed cum hoc ... excidit tibi in cibo aut in potu, aut: olefac Elegantioris non sit ... triginta sex horae post ... Poof. Vir aetatis operantes, dura sicut facit ...excidit tibi in cibo aut in potu, aut: olefac Elegantioris non sit ...",
    },
    {
        title: "Smart Campus",
        url: "",
        description: "Suus satis. Quod etiam optime. Vos ite post eum, fistulae, nunquam vivum exire ab ea. Sed cum hoc ... excidit tibi in cibo aut in potu, aut: olefac Elegantioris non sit ... triginta sex horae post ... Poof. Vir aetatis operantes, dura sicut facit ...excidit tibi in cibo aut in potu, aut: olefac Elegantioris non sit ...",
    },

])
    .then((technology) => {
        console.log(technology)
    })
    .catch((err) => console.log("Error while create technology : ", err));