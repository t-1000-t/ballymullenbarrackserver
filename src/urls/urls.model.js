const mongoose = require('mongoose')
const Schema = mongoose.Schema

const urlSchema = new Schema(
  {
    url: {
      type: String,
      require: true,
    },
    shortUrl: String,
  },
  {
    timestamps: true,
  },
)

module.exports = Urls = mongoose.model('Urls', urlSchema)
