const express = require('express')
const router = express.Router()

const controller = require('../controllers/teams.jsx')

router.get('', controller.getTeams)
router.get('/:id', controller.getTeamById)

module.exports = router
