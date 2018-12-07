const express = require('express');
const router = express.Router();
const subscriberController = require('../controllers/subscriberController');


router.get("/", subscriberController.index);

router.post("/create", subscriberController.create);

router.delete('/delete/:id', subscriberController.delete);

module.exports = router