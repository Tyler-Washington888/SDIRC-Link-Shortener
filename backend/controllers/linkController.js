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
  const { longUrl, email } = req.body;
  const baseUrl = process.env.BASE_URL

  // Check base url
  if (!validUrl.isUri(baseUrl)) {
    return res.status(401).json('Invalid base url');
  }

  // Create url code
  const urlCode = shortid.generate();

  // Check long url
  if (validUrl.isUri(longUrl)) {
    try {
      let url = await Url.findOne({ longUrl });

      if (url) {
        res.json(url);
      } else {
        const shortUrl = baseUrl + '/' + urlCode;

        url = new Url({
          longUrl,
          shortUrl,
          urlCode,
          email,
          clicks: 0, 
          date: new Date()
        });

        await url.save();

        res.json(url);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json('Server error');
    }
  } else {
    res.status(401).json('Invalid long url'); 
  }
}

// @desc Update link
// @route PUT /api/links/:id
// @access Public
const updateLink = async (req, res) => {
  const link = await Url.findById(req.params.id)

  if (!link){
    res.status(400)
    throw new Error('Link not found')
  }

  const updatedLink = await Url.findByIdAndUpdate(link.id, {
    longUrl: link.longUrl,
    shortUrl: link.shortUrl,
    urlCode: link.urlCode,
    email: link.email,
    clicks: link.clicks + 1,
    date: link.date,
  }, {
    new: true,
  })

  res.status(200).json(updatedLink)
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
    updateLink,
    deleteLink
}