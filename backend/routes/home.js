const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');


router.get("/", homeController.index);

router.put("/", homeController.edit);



module.exports = router