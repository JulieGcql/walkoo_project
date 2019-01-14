const express = require('express');
const router = express.Router();
const expertiseController = require('../controllers/expertiseController');
const passport = require('passport');


router.get("/", expertiseController.index);

router.post("/create", passport.authenticate('jwt', { session: false }), expertiseController.create);

router.put("/edit/:id", passport.authenticate('jwt', { session: false }),expertiseController.edit);

router.delete("/delete/:id", passport.authenticate('jwt', { session: false }),expertiseController.delete);


module.exports = router