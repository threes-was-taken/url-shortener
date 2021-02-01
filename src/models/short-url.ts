const mongoose = require('mongoose')

const shortUrlSchema = new mongoose.Schema({
  slug: {
    type: String,
    unique: true,
    dropDups: true,
  },
  url: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('ShortUrl', shortUrlSchema)
