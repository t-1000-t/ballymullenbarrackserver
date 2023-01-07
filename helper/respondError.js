module.exports.sendError = (err, res) => {
  res.status(400).json({
    error: err,
    massage: err.message,
  })
}
