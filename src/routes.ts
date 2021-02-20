const router = require('express').Router();

const controller = require('./controllers/short-url-controller.ts');

router.get('/:id', controller.redirect);
router.post('/url', controller.store);

module.exports = router;
