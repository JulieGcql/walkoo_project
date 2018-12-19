const express = require('express');
const router = express.Router();
const realisationController = require('../controllers/realisationController');


router.get("/", realisationController.index);

router.get("/:id", realisationController.show);

router.post("/create", realisationController.create);

router.put("/edit/:id", realisationController.edit);

router.delete('/delete/:id', realisationController.delete);

module.exports = router