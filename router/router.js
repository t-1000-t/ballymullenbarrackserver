const router = require('express').Router()
const { urlRouter } = require('../src/urls')

router.use('/url', urlRouter)

module.exports = router
