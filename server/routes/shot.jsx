const express = require('express')
const router = express.Router()

const controller = require('../controllers/shot.jsx')

router.get('', controller.getShots)

module.exports = router
