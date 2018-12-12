const express = require('express');
const router = express.Router();
const expertiseController = require('../controllers/expertiseController');


router.get("/", expertiseController.index);

router.post("/create", expertiseController.create);

router.put("/edit", expertiseController.edit);

module.exports = router