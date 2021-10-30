const express = require('express')
const router = express.Router()

const controller = require('../controllers/players.jsx')

router.get('', controller.getPlayers)
router.get('/:id', controller.getPlayerByID)

module.exports = router
