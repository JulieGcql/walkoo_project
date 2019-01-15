const express = require('express');
const router = express.Router();
const realisationController = require('../controllers/realisationController');
const passport = require('passport');


router.get("/", realisationController.index);

router.get("/:id", realisationController.show);

router.post("/create", passport.authenticate('jwt', { session: false }),realisationController.create);

router.put("/edit/:id", passport.authenticate('jwt', { session: false }),realisationController.edit);

router.delete('/delete/:id', passport.authenticate('jwt', { session: false }),realisationController.delete);

module.exports = router