const express = require('express')
const connectDB = require('./db/db')
const shortid = require('shortid')
const validUrl = require('valid-url')
const shortUrlRoute = require('./routes/shorturl')
const getShortUrlRoute = require('./routes/getShortUrl')

const app = express()
connectDB()

app.use(express.json({}))
const PORT = 8000
app.listen(PORT, () => console.log('Server is listening on port ' + PORT))

app.use('/v1/', getShortUrlRoute)
app.use('/v1/shortUrl', shortUrlRoute)
