const express = require('express');
const router = express.Router();
const configurationController = require('../controllers/configurationController');
const passport = require('passport');


router.get("/", configurationController.index);

router.post("/create", passport.authenticate('jwt', { session: false }), configurationController.create);

router.put("/edit/:id", passport.authenticate('jwt', { session: false }), configurationController.edit);

module.exports = router