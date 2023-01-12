const { Users } = require('../users')

module.exports = async (req, res) => {
  try {
    const body = req.body

    const user = await Users.findOne({ email: body.email })
    console.log('user', user)
    if (user) {
      console.log(user.password === body.password)
      const passwordCompare = user.validatePassword(body.password)

      passwordCompare
        ? res.status(200).json({ user: user })
        : res.status(404).json({ message: 'Email or Password not correct' })
      // res.redirect('/dashboard', 301)
    } else {
      // catch
      res.status(404).json({ message: 'Some fields are missing' })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
