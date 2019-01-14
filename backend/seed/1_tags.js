const models = require('../models');
const Tag = models.Tag;

Tag.bulkCreate([
    {
  name: "logo"
},
{
  name: "expertise"
},
{
  name: "technologie"
},
{
  name: "secteur"
},
{
  name: "realisation"
},
{
  name: "partenaire"
},
])
    .then((createdHome) => console.log(createdHome))
    .catch((err) => console.log(err))