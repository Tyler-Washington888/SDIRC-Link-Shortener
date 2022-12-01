const express = require('express')
const router = express.Router()
const {getLinks, getMyLinks,createLink, updateLink, deleteLink} = require('../controllers/linkController')

router.route('/').get(getLinks).post(createLink).post(updateLink);
router.route('/myLinks').get(getMyLinks);
router.route('/:id').delete(deleteLink);

module.exports = router;

