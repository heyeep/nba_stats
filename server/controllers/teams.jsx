const axios = require('axios')

const api = 'https://data.nba.net/10s/prod/v1/2021'

exports.getTeams = async (req, res) => {
  const teams = await axios.get(`${api}/teams.json`)
                             .then(response => {
                               const data = { teams: response.data.league.standard }
                               res.status(200).json(data)}
                             )
                           .catch(err => res.status(442).send(err))
}
exports.getTeamById = async (req, res) => {
  const teamId = req.params.id
  const teams = await axios.get(`${api}/teams/${teamId}/roster.json`)
                             .then(response => {
                               const data = response.data.league.standard
                               res.status(200).json(data)
                             })
                           .catch(err => res.status(442).send(err))
}
