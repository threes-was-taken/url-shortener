const express = require('express')
const cors = require('cors')

const app = express()

//allows Cross Origin Resource Sharing
app.use(cors)
//enable JSON request for server
app.use(express.json())

app.get('/', (req, res) => {
  res.send("This is cool")
})

//use .env defined port if available, if not, use default 3000
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.info(`Listening on ${PORT}`)
})
