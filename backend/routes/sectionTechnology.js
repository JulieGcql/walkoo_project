const express = require('express');
const router = express.Router();
const sectionTechnologyController = require('../controllers/sectionTechnologyController');


router.get("/", sectionTechnologyController.index);

router.post("/create", sectionTechnologyController.create);

router.put("/edit/:id", sectionTechnologyController.edit);

router.delete('/delete/:id', sectionTechnologyController.delete);

module.exports = router