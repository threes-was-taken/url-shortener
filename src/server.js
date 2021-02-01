const express = require('express')
const cors = require('cors')
const routes = require('./routes')
require('./database').connect() //connection to mongo db

const app = express()

//allows Cross Origin Resource Sharing
app.use(cors)
//enable JSON request for server
app.use(express.json())
//open up routes for our API
app.use(routes)

//use .env defined port if available, if not, use default 3000
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.info(`Listening on ${PORT}`)
})
