const { Users } = require('../users')

module.exports = async (req, res) => {
  try {
    const body = req.body

    if (body.password && body.email) {
      const user = await new Users(body)

      const result = await user.save()

      if (result) {
        // res.status(201).json({ user: result });
        res.redirect('/dashboard', 301)

        // login(req, res)
      }
    } else {
      res.status(404).json({ message: 'Some required fields missing' })
      // якщо даних немає перерендерити дану сторінку Реєстрації з потрібними ерорами
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
