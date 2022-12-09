const express = require('express')
const router = express.Router()
const {getLinks, getMyLinks,createLink, updateLink, deleteLink} = require('../controllers/linkController')

router.route('/').get(getLinks).post(createLink)
router.route('/myLinks').get(getMyLinks);
router.route('/:id').put(updateLink).delete(deleteLink);

module.exports = router;

