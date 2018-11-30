const faker = require('faker');
const models = require('../models');
const Media = models.Media;
const Tag = models.Tag;

/////// 1 ///////
// Create 5 Medias and 1 Tag, link new Tag and all Medias
Media.bulkCreate([
  {name: faker.lorem.word(), type: 'file', url: faker.internet.url()},
  {name: faker.lorem.word(), type: 'file', url: faker.internet.url()},
  {name: faker.lorem.word(), type: 'file', url: faker.internet.url()},
  {name: faker.lorem.word(), type: 'file', url: faker.internet.url()},
  {name: faker.lorem.word(), type: 'file', url: faker.internet.url()},
])
.then((medias) => {
  Tag.create({name: faker.lorem.word()})
  .then((tag) => {
    tag.setMedias(medias)
    .then((linkedTagAndMedia) => {
      console.log(linkedTagAndMedia)
    })
    .catch((err) => console.log("Error while linked media and tag : ", err))
  })
  .catch((err) => console.log("Error while tag creation : ", err))
})
.catch((err) => console.log("Error while media creation : ", err))

/////// 2 ///////
// Find a Tag by Id  and get linked Medias
Tag.findByPk(1, {include: 'medias'})
.then((tag) => {
  console.log(tag)
})
.catch((err) => console.log("Error while search Tag : ", err))

/////// 3 ///////
// Find a Media by Id  and get linked Tags
Media.findByPk(1, {include: 'tags'})
.then((media) => {
  console.log(media)
})
.catch((err) => console.log("Error while search Media : ", err))
