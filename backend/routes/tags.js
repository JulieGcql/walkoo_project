var express = require('express');
var router = express.Router();
const tagsController = require('../controllers/tagsController')
const passport = require('passport');

/* GET tags listing. */
router.get('/', tagsController.index);

/* GET tag by id. */
router.get('/secteur', tagsController.getSecteurMedia);

router.get('/technologie', tagsController.getTechnologyMedia);
router.get('/expertise', tagsController.getExpertiseMedia);
router.get('/realisation', tagsController.getRealisationMedia);


router.get('/logo', tagsController.getConfigurationMedia);

router.get('/partenaire', tagsController.getPartenairesMedia);

router.get('/:id', tagsController.show);

/* POST new tag. */
router.post('/create', passport.authenticate('jwt', { session: false }),tagsController.create);

/* PUT edit tag. */
router.put('/edit/:id', passport.authenticate('jwt', { session: false }),tagsController.edit);

/* DELETE existing tag. */
router.delete('/delete/:id', passport.authenticate('jwt', { session: false }),tagsController.delete);


module.exports = router;
