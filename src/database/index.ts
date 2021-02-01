const mongo = require('mongoose')

require('dotenv').config()

const connect = async () => {
  return mongo.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
}

module.exports = { connect }
