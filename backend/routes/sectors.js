const express = require('express');
const router = express.Router();
const sectorsController = require('../controllers/sectorsController');
const passport = require('passport');


router.get("/", sectorsController.index);

router.get("/:id", sectorsController.show);

router.post("/create", passport.authenticate('jwt', { session: false }),sectorsController.create);

router.put("/edit/:id", passport.authenticate('jwt', { session: false }),sectorsController.edit);

router.delete('/delete/:id', passport.authenticate('jwt', { session: false }),sectorsController.delete);

module.exports = router