const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/eventsController');


router.get("/", eventsController.index);

router.post("/create", eventsController.create);

router.put("/edit/:id", eventsController.edit);

router.delete('/delete/:id', eventsController.delete);

module.exports = router