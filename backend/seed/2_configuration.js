const faker = require('faker');
const models = require('../models');
const Configuration = models.Configuration;

Configuration.create({
  title: faker.lorem.words(),
  mediaId: 1,
  phone: faker.phone.phoneNumber(),
  twitter: faker.internet.url(),
  linkedin: faker.internet.url(),
  rgpd: faker.lorem.paragraphs(),
  metaTitle: faker.lorem.sentence(),
  metaDescription: faker.lorem.sentence(),
  metaKeyword: faker.internet.domainWord(),
  metaImage: faker.lorem.word(),
  catchPhrase: faker.lorem.sentence(),
  homeBackId: 2,
  homeSubtitle: faker.lorem.sentence(),
  expertiseParagraph1: faker.lorem.sentence(),
  expertiseParagraphe2: faker.lorem.sentence(),
  expertiseImageId: 3,
  technologieSubtitle: faker.lorem.sentence(),
  technologieDescription: faker.lorem.sentence(),
  realisationBackId: 4,
})
.then((config) => {
  console.log(config)
})
.catch((err) => console.log("Error while create Configuration : ", err))