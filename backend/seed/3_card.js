const faker = require('faker');
const models = require('../models');
const Card = models.Card;

Card.bulkCreate([
  {
    title: faker.lorem.words(),
    mediaId: 1,
    description: faker.lorem.sentence(),
    section: faker.lorem.words()
  },
  {
    title: faker.lorem.words(),
    mediaId: 2,
    description: faker.lorem.sentence(),
    section: faker.lorem.words()
  },
  {
    title: faker.lorem.words(),
    mediaId: 3,
    description: faker.lorem.sentence(),
    section: faker.lorem.words()
  },
])
.then((cards) => {
  console.log(cards)
})
.catch((err) => console.log("Error while create Card : ", err))