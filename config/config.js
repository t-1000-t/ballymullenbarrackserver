require('dotenv').config()

const isDev = process.env.NODE_ENV === 'development'
const port = process.env.PORT || 5000
const appURL = isDev ? process.env.URL_DEV : process.env.URL_PROD

module.exports = {
  mongodbUri: process.env.MONGO_DB_URI || 'mongodb://localhost:27027/shorturl',
  port: port,
  mode: process.env.NODE_ENV || 'production',
  appUrl: isDev ? `${appURL}:${port}` : appURL,
  secretJwtKey: process.env.JWT_SECRET_KEY || 'you must write secret key in env',
  googleClientId: process.env.GOOGLE_CLIENT_ID,
  googleClientKey: process.env.GOOGLE_CLIENT_SECRET,
  facebookAppId: process.env.FACEBOOK_APP_ID,
  facebookAppSecret: process.env.FACEBOOK_APP_SECRET,
}
