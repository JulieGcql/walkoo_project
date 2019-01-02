const express = require('express');
const router = express.Router();
const technologyController = require('../controllers/technologyController');


router.get("/", technologyController.index);

router.post("/create", technologyController.create);

router.put("/edit/:id", technologyController.edit);

router.delete('/delete/:id', technologyController.delete);

module.exports = router