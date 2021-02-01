const mongoose = require('mongoose')
const ShortURL = mongoose.Schema({
  alias: {
    type: String,
    unique: true,
    required: true
  },
  url: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('ShortURL', ShortURL)