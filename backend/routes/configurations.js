const express = require('express');
const router = express.Router();
const configurationController = require('../controllers/configurationController');


router.get("/", configurationController.index);

router.post("/create", configurationController.create);

router.put("/edit/:id", configurationController.edit);

module.exports = router