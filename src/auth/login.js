const { Users } = require('../users')

module.exports = async (req, res) => {
  try {
    const body = req.body

    const user = await Users.findOne({ email: body.email })
    console.log('user', user)
    if (user) {
      console.log(user.password === body.password)
      if (user.password === body.password) {
        res.redirect('/dashboard', 301)
      } else {
        // catch
      }
    } else {
      // catch
    }
  } catch (error) {}
}
