const models = require('../models');
const Home = models.Home;

const faker = require('faker');

Home.create({
    catchPhrase: faker.lorem.sentence(),
    subtitle: faker.lorem.sentence()
})
.then((createdHome) => console.log(createdHome))
.catch((err) => console.log(err))