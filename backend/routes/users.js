var express = require('express');
var router = express.Router();
const passport = require('passport');
const userController = require("../controllers/usersController");

/* GET users listing. */
router.get('/', passport.authenticate('jwt', { session: false }), userController.index);

router.put('/', passport.authenticate('jwt', { session: false }),userController.edit)

module.exports = router;
