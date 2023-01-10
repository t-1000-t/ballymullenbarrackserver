const router = require('express').Router()
const { urlRouter } = require('../src/urls')
const { authRouter } = require('../src/auth')

router.use('/url', urlRouter)
router.use('/auth', authRouter)

module.exports = router
