const User = require('../models').User;
const bcrypt = require('bcrypt')

module.exports = {
  index: function(req, res, next) {
    User.findAll()
    .then((users) => res.json({users}))
    .catch((err) => res.send(err))
  },

  edit: function(req, res, next) {
    User.findByPk(1)
    .then((user) => {
      if(user){
        if(req.body.password){
          bcrypt.hash(req.body.password, 10)
          .then((hash) => {
            user.password = hash
            user.save()
            .then((updaptedUser) => res.sendStatus(200))
            .catch((err) => console.log(err))
          })
          .catch((err) => console.log(err))
        } else {
          res.sendStatus(404)
        }
      } else {
        res.sendStatus(404)
      }
    })
    .catch((err) => res.sendStatus(500))
  }
}