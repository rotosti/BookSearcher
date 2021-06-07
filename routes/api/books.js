const router = require('express').Router();
const controller = require('../../controller/bookController'); // add controller

router.route('/')
    .get(controller.getAllSaved)
    .post(controller.saveBook);

router.route('/:id')
    .delete(controller.removeSaved);

router.route('/search/:query')
    .get(controller.getBooks);

module.exports = router;