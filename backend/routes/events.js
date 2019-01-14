const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/eventsController');
const passport = require('passport');


router.get("/", eventsController.index);

router.post("/create", passport.authenticate('jwt', { session: false }),eventsController.create);

router.put("/edit/:id", passport.authenticate('jwt', { session: false }), eventsController.edit);

router.delete('/delete/:id', passport.authenticate('jwt', { session: false }), eventsController.delete);

module.exports = router