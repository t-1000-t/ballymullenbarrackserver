const express = require('express')
// const cors = require('cors')
// const morgan = require('morgan')
const app = express()
const config = require('./config/config')
const apiRouter = require('./router/router')

require('./db/connectionDB')()

if (config.mode === 'development') {
  const logger = require('morgan')
  app.use(logger('dev'))
}

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('We are on the Web-BallyMullen server')
})

app.use('/api', apiRouter)

app.listen(config.port, () => console.log(`Server running on port ${config.port}`))
