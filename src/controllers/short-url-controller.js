const ShortURL = require('../models/short-url')
const { naniod } = require('nanoid')
const yup = require('yup')

const newSchema = yup.object().shape({
  slug: yup
    .string()
    .trim()
    .matches(/^[w\-]+$/i),
  url: yup.string().trim().url().required(),
})

const redirect = async (req, res) => {
  const { id: alias } = req.params

  try {
    const url = await ShortURL.findOne({ alias })
    if (url) {
      return res.redirect(url.url)
    } else {
      return res.status(404).send({ message: 'invalid url' })
    }
  } catch (error) {
    return res.status(404).send({ message: 'invalid url' })
  }
}

const store = async (req, res, next) => {
  let { alias, url } = req.body

  try {
    await newSchema.validate({ alias, url })

    if (!alias) {
      alias = nanoid(8)
    } else {
      const existingUrl = await ShortURL.findOne({ alias })

      if (existingUrl) {
        throw new Error('Alias already in use!')
      }
    }

    alias = alias.toLowerCase()

    const newUrl = { alias, url }
    const createdUrl = await ShortURL.create(newUrl)

    res.json(createdUrl)
  } catch (error) {
    next(error)
  }
}

module.exports = { redirect, store }
