const express = require("express")
const config = require("config")
const Url = require("../db/url")

var getShortenUrlRoute = express.Router()

getShortenUrlRoute.get("/:shortUrl", async (req, res) => {
  var shortUrlCode = req.params.shortUrl
  var url = await Url.findOne({urlCode: shortUrlCode})

  try {
    if (url){
      var clickCount = url.clickCount
      if(clickCount >= config.allowedClick){ console.log("The click count for shortcode " + shortUrlCode + " has passed the limit of " + config.allowedClick);
                return res.status(400).json("The click count for shortcode " + shortUrlCode + " has passed the limit of " + config.allowedClick);
            }
            clickCount++;
            await url.update({ clickCount });
            return res.redirect(url.longUrl);
        } else {
            return res.status(400).json("The short url doesn't exists in our system.");
        }
    } catch (error) {
    console.error("Error while retrieving long url for shorturl code" + shortUrlCode)
    return res.status(500).json("There is an internal server error.")
  }
})

module.exports = getShortenUrlRoute