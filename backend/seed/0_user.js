const models = require('../models');
const User = models.User;

User.bulkCreate([

  {
    firstName: "Sabrina",
    lastName: "Grassi",
    email: "contact.walkoo@gmail.com",
    password: "WalkooCityMap13",
    isAdmin: true
  },
  {
    firstName: null,
    lastName: null,
    email: "wildcodeschoolwalkoo@gmail.com",
    password: "walkoowcs13",
    isAdmin: true
  }
],{individualHooks: true})
    .then((createdUser) => console.log(createdUser))
    .catch((err) => console.log(err))