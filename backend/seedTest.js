const models = require('./models');
const Media = models.Media;
const Card = models.Card;
const Section = models.Section;


Media.bulkCreate([
  {
    name: "Media1",
    type: "image",
    url: "www.google.fr"
  },
  {
    name: "Media2",
    type: "video",
    url: "www.vimeo.com"
  },
  {
    name: "Media3",
    type: "pdf",
    url: "www.yahoo.fr"
  },
])
.then((medias) => {
  console.log(medias)
})
.catch((err) => console.log("Error while Medias creation", err))