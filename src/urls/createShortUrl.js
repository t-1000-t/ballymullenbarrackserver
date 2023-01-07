const Urls = require('./urls.model')
const shortId = require('shortid')
const { sendError } = require('../../helper/respondError')

module.exports.createShortUrl = (req, res) => {
  const { url } = req.body

  const createNewShortUrl = new Urls({
    url,
    shortUrl: shortId(),
  })

  createNewShortUrl
    .save()
    .then((result) => {
      res.redirect(`/?result=http://localhost:5000/${result.shortUrl}`)
    })
    .catch((err) => sendError(err, res))
}
