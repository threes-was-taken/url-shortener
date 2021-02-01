const router = require('express').Router()
const controller = require('./controllers/short-url-controller')
//setup routes

router.get('/', (req, res) => {
  res.send('Shortening URLs right now')
})

router.get('/:id', controller.redirect)

router.post('/url', controller.store)

module.exports = router