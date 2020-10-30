const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURI')

const connectToDb = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
    })

    console.log('Connection made with database')
  } catch (err) {
    console.error(err.message)
  }
}

module.exports = connectToDb
