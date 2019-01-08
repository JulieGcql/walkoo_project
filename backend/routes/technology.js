const express = require('express');
const router = express.Router();
const technologyController = require('../controllers/technologyController');
const passport = require('passport');


router.get("/", technologyController.index);

router.post("/create", passport.authenticate('jwt', { session: false }),technologyController.create);

router.put("/edit/:id", passport.authenticate('jwt', { session: false }),technologyController.edit);

router.delete('/delete/:id', passport.authenticate('jwt', { session: false }),technologyController.delete);

module.exports = router