const axios = require('axios')

const api = 'https://data.nba.net/10s/prod/v1/'
const api2 = 'https://data.nba.net/10s/prod/v2/'

exports.getGameSchedule = async (req, res) => {
  const schedule = await axios.get(`${api}/2021/schedule.json`)
                             .then(response => {
                               const data = { games: response.data.league.standard }
                               res.status(200).json(data)}
                             )
                           .catch(err => res.status(442).send(err))
}

exports.getGameBoxscore = async (req, res) => {
  const gameDate = req.params.date
  const gameId = req.params.id
  const players = await axios.get(`${api}/${gameDate}/${gameId}_boxscore.json`)
                             .then(response => {
                               const data = {
                                 boxscore: {
                                   basicGameData: response.data.basicGameData,
                                   stats: response.data.stats,
                                 }
                               }
                               res.status(200).json(data)
                             })
                           .catch(err => res.status(442).send(err))
}

exports.getGameScoreboard = async (req, res) => {
  const gameDate = req.params.date
  const players = await axios.get(`${api2}/${gameDate}/scoreboard.json`)
                             .then(response => {
                               const data = { games: response.data.games }
                               res.status(200).json(data)
                             })
                           .catch(err => res.status(442).send(err))
}
