const express = require('express');
const router = express.Router();
const sectionRealisationController = require('../controllers/sectionRealisationController');


router.get("/", sectionRealisationController.index);

router.get("/:id", sectionRealisationController.show);

router.post("/create", sectionRealisationController.create);

router.put("/edit/:id", sectionRealisationController.edit);

router.delete('/delete/:id', sectionRealisationController.delete);

module.exports = router