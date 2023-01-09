const Urls = require('./urls.model')
const sendError = require('../../helper/respondError')

module.exports = (req, res) => {
  const shortUrl = req.params.shortUrlId

  console.log('shortUrl', shortUrl)
  Urls.findOne({ shortUrl })
    .then((result) => {
      res.redirect(301, result.url)
    })
    .catch((err) => {
      sendError(err, res)
    })
}
