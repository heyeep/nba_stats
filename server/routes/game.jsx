const express = require('express')
const router = express.Router()

const controller = require('../controllers/games.jsx')

router.get('', controller.getGameSchedule)
router.get('/:date', controller.getGameScoreboard)
router.get('/:date/:id', controller.getGameBoxscore)

module.exports = router
