const models = require('../models');
const SectionRealisation = models.SectionRealisation;

SectionRealisation.create(
    {
       mediaId: 12,
    },

)
    .then((createdExpertise) => {
        console.log(createdExpertise)
    })
    .catch((err) => console.log("Error while create section-realisation : ", err));