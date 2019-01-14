const express = require('express');
const router = express.Router();
const subscriberController = require('../controllers/subscriberController');
const passport = require('passport');


router.get("/", passport.authenticate('jwt', { session: false }),subscriberController.index);

router.post("/create", subscriberController.create);

router.delete('/delete/:id', passport.authenticate('jwt', { session: false }),subscriberController.delete);

module.exports = router