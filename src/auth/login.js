const Users = require('../users')

module.exports = async (req, res) => {
  try {
    const body = req.body

    const user = await Users.findOne({ email: body.email })

    if (user) {
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
