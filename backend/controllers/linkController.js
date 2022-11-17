const validUrl = require('valid-url')
const shortid = require('shortid')
const Url = require('../models/linkModel')

// @desc Get links 
// @route GET /api/links
// @access Public
const getLinks = async (req, res) => {
    const links = await Url.find()
    res.status(200).json(links)
}

// @desc Create link 
// @route POST /api/links
// @access Public
const createLink = async (req, res) => {
  const { longUrl, email, urlCode } = req.body;
  const baseUrl = process.env.BASE_URL


  // Check base url
  if (!validUrl.isUri(baseUrl)) {
    return res.status(401).json('Invalid base url');
  }
  
  // Check property values
  if (!longUrl || !email || !urlCode){
    res.status(400)
    throw new Error("Please add all required fields")
  }

  // check if urlCode is taken
  const alias = await Url.findOne({urlCode})

  // send error message if urlCode is taken
  if (alias){
    res.status(400).json({message: 'Url name is taken'})
  }

  // Check if long url is valid
  if (validUrl.isUri(longUrl)) {
    try {
      // check to see if longUrl exists in database
      let url = await Url.findOne({ longUrl });

      // send error message if longUrl exists
      if (url) {
        res.status(400).json(url);
      } else {
        // create shortUrl
        const shortUrl = baseUrl + '/' + urlCode;

        url = await Url.create({
          longUrl,
          shortUrl,
          urlCode,
          email,
          clicks: 0, 
          date: new Date()
        });

        res.status(200).json(url);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json('Server error');
    }
  } else {
    res.status(401).json('Invalid long url'); 
  }
}


// @desc Delete link
// @route GET /api/links/:id
// @access Private
const deleteLink = async (req, res) => {
  const link = await Url.findById(req.params.id)

  if (!link){
    res.status(400)
    throw new Error('Link not found')
  }

  await link.remove()

  res.status(200).json({id:req.params.id})
}

module.exports = {
    getLinks,
    createLink,
    deleteLink
}