const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const config = require('./config/config')
const apiRouter = require('./router/router')

require('./db/connectionDB')()

app.use(morgan('tiny'))
app.use(cors('*'))

if (config.mode === 'development') {
  const logger = require('morgan')
  app.use(logger('dev'))
}

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const optionsReactViews = { beautify: true }

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine(optionsReactViews))

app.get('/', (req, res) => {
  // res.send('We are on the Web-BallyMullen server')
  const query = req.query

  res.render('index', query)
})

app.use('/sign-in', () => {})
app.use('/sign-up', () => {})
app.use('/dashboard', () => {})

app.use('/api', apiRouter)

app.listen(config.port, () => console.log(`Server running on port ${config.port}`))
