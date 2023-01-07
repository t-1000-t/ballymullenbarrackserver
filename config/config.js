require('dotenv').config()
module.exports = {
  mongodbUri: process.env.MONGO_DB_URI || 'mongodb://localhost:27017',
  port: process.env.PORT || 5000,
  mode: process.env.NODE_ENV || 'production',
  appUrl: 'http://localhost:5000',
}
