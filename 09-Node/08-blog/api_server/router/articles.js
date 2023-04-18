const express = require('express')
const router = express.Router()

const articleHandler = require('../router_handler/articleHandler')

router.post('/add',articleHandler.addArticle)

module.exports = router
