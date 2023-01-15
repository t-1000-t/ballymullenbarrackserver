const getUser = (req, res) => {
  console.log('req', req.user)
  req.user.save()

  res.json({
    customeUserByIdFromToken: req.user.getPublicFields(),
  })
}

module.exports = getUser
