const express = require('express')
const router = express.Router()

const controller = require('../controllers/shots.jsx')

router.get('', controller.getShots)

module.exports = router
