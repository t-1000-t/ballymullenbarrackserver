const router = require('express').Router()
const getUser = require('./getUser')

router.get('/', getUser)

module.exports = router
