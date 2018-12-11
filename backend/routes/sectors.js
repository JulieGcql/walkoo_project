const express = require('express');
const router = express.Router();
const sectorsController = require('../controllers/sectorsController');


router.get("/", sectorsController.index);

router.get("/:id", sectorsController.show);

router.post("/create", sectorsController.create);

router.put("edit/:id", sectorsController.edit);

router.delete('/delete/:id', sectorsController.delete);

module.exports = router