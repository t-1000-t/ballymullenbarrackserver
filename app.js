const express = require('express')
// const cors = require('cors')
// const morgan = require('morgan')
const app = express()
const config = require('./config/config')
const apiRouter = require('./router/router')
const getUrl = require('./src/urls/getUrlById')

require('./db/connectionDB')()

// app.use(morgan('tiny'))
// app.use(cors('*'))

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

app.get('/:shortUrlId', getUrl)
app.get('/', (req, res) => {
  // res.send('We are on the Web-BallyMullen server ')
  const query = req.query

  res.render('index', query)
})

app.get('/sign-in', (req, res) => {
  res.render('signIn')
})
app.use('/sign-up', (req, res) => {
  res.render('register')
})
app.use('/dashboard', (req, res) => {
  res.render('index')
})

app.use('/api', apiRouter)

app.listen(config.port, () => console.log(`Server running on port ${config.port}`))
