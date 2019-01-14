const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const passport = require('passport');


router.get("/", homeController.index);

router.put("/", passport.authenticate('jwt', { session: false }),homeController.edit);



module.exports = router