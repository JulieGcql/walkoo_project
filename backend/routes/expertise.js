const express = require('express');
const router = express.Router();
const expertiseController = require('../controllers/expertiseController');


router.get("/", expertiseController.index);

router.post("/create", expertiseController.create);

router.put("/edit/:id", expertiseController.edit);

router.delete("/delete/:id", expertiseController.delete);


module.exports = router