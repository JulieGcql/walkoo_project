const express = require('express');
const router = express.Router();
const mediasController = require('../controllers/mediasController');
const passport = require('passport');

// Require and setup uploader to keep files in uploads folder
const multer  = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
const upload = multer({ storage: storage })

/* GET medias listing. */
router.get('/', mediasController.index);

/* GET media by id. */
router.get('/:id', mediasController.show);

/* POST new media. multer create an object, we can access it with req.file */
router.post('/create', passport.authenticate('jwt', { session: false }),upload.single('file'), mediasController.create);

/* PUT edit media. */
router.put('/edit/:id', passport.authenticate('jwt', { session: false }),mediasController.edit);

/* DELETE existing media. */
router.delete('/:id', passport.authenticate('jwt', { session: false }),mediasController.delete);

module.exports = router;
