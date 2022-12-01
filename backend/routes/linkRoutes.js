const express = require('express')
const router = express.Router()
const {getLinks, getMyLinks,createLink, updateLink, deleteLink} = require('../controllers/linkController')

router.route('/').get(getLinks).get(getMyLinks).post(createLink).post(updateLink);
router.route('/:id').delete(deleteLink);

module.exports = router;

