const axios = require('axios')

const api = 'https://data.nba.net/10s/prod/v1/2021'

exports.getPlayers = async (req, res) => {
  const players = await axios.get(`${api}/players.json`)
                             .then(response => {
                               const data = { players: response.data.league.standard }
                               res.status(200).json(data)}
                             )
                           .catch(err => res.status(442).send(err))
}

exports.getPlayerById = async (req, res) => {
  const playerId = req.params.id
  const players = await axios.get(`${api}/players/${playerId}_profile.json`)
                             .then(response => {
                               const data = {
                                 personId: playerId,
                                 playerStats: response.data.league.standard.stats
                               }
                               res.status(200).json(data)
                             })
                           .catch(err => res.status(442).send(err))
}
