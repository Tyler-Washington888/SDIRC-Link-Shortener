const validUrl = require("valid-url");
const Url = require("../models/linkModel");
const asyncHandler = require("express-async-handler");

// @desc Get links
// @route GET /api/links
// @access Public
const getLinks = asyncHandler(async (req, res) => {
  const links = await Url.find();
  res.status(200).json(links);
});

// @desc Get my links
// @route GET /api/myLinks
// @access Public
const getMyLinks = asyncHandler(async (req, res) => {
  const { email } = req.body;

  try {
    const links = await Url.find({ email });

    if (links) {
      res.status(200).json(links);
    }
  } catch (error) {
    console.error(err);
    res.status(500).json("Server error");
  }
});

// @desc Create link
// @route POST /api/links
// @access Public
const createLink = asyncHandler(async (req, res) => {
  const { longUrl, email, urlCode } = req.body;
  const baseUrl = process.env.BASE_URL;

  // Check base url
  if (!validUrl.isUri(baseUrl)) {
    return res.status(401).json("Please enter a valid Base URL");
  }

  // Check property values
  if (!longUrl || !email || !urlCode) {
    return res.status(400).json("Please enter all required fields");
  }

  // check if urlCode is taken
  const alias = await Url.findOne({ urlCode });

  // send error message if urlCode is taken
  if (alias) {
    return res.status(400).json("Please enter a URL Name that isn't taken");
  }

  // Check if long url is valid
  if (validUrl.isUri(longUrl)) {
    try {
      // check to see if longUrl exists in database
      let url = await Url.findOne({ longUrl });

      // send error message if longUrl exists
      if (url) {
        res.status(400).json("Please enter a Long URL that isn't taken");
      } else {
        // create shortUrl
        const shortUrl = baseUrl + "/" + urlCode;

        url = await Url.create({
          longUrl,
          shortUrl,
          urlCode,
          email,
          clicks: 0,
          date: new Date(),
        });

        res.status(200).json(url);
      }
    } catch (err) {
      res.status(500).json("Server error");
    }
  } else {
    res.status(401).json("Please enter a valid Long URL");
  }
});

// @desc Update link
// @route POST /api/links/:id
// @access Private
const updateLink = asyncHandler(async (req, res) => {
  const link = await Url.findById(req.params.id);
  const { newUrlCode } = req.body;
  const alias = await Url.findOne({ urlCode: newUrlCode });
  const baseUrl = process.env.BASE_URL;

  // Check base url
  if (!validUrl.isUri(baseUrl)) {
    return res.status(401).json({ message: "Invalid base url" });
  }
  // Check if link to update exists
  if (!link) {
    return res.status(400).json({ message: "Link to update was not found" });
  }
  // Check if required data came in request
  if (!newUrlCode) {
    return res.status(400).json({ message: "Please add all required fields" });
  }
  // check if new urlCode is taken
  if (alias) {
    return res.status(400).json({ message: "Url name is taken" });
  }

  // rename shortUrl
  const shortUrl = baseUrl + "/" + newUrlCode;

  let newURL = await Url.findByIdAndUpdate(
    req.params.id,
    {
      urlCode: newUrlCode,
      longUrl: link.longUrl,
      shortUrl,
      email: link.email,
      clicks: link.clicks,
      date: link.date,
    },
    { new: true }
  );
  if (newURL) {
    res.status(200).json(newURL);
  } else {
    res.send(400).json("Error updating link");
  }
});

// @desc Delete link
// @route GET /api/links/:id
// @access Private
const deleteLink = asyncHandler(async (req, res) => {
  const link = await Url.findById(req.params.id);

  if (!link) {
    res.status(400);
    throw new Error("Link not found");
  }

  await link.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getLinks,
  getMyLinks,
  createLink,
  updateLink,
  deleteLink,
};
