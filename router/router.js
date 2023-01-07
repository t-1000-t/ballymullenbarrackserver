const router = require('express').Router()
const { urlRouter } = require('../src/urls')

// TODO
// 1) Auth
// 2) Users
// 3) users by user
router.use('/url', urlRouter)

module.exports = router
