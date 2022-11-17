const express = require('express')
const router = express.Router()
const {getLinks, createLink,deleteLink} = require('../controllers/linkController')

router.route('/').get(getLinks).post(createLink);
router.route('/:id').delete(deleteLink);

module.exports = router;

