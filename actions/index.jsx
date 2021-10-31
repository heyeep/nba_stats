import axios from 'axios'

export const getShots = async (playerId) => {
  return await axios.get(`/api/shots?player=${playerId}`)
    .then(response => response)
}

export const getPlayers = async (req) => {
  return await axios.get('/api/players')
    .then(response => response)
}

export const getPlayer = async (playerId) => {
  return await axios.get(`/api/players/${playerId}`)
    .then(response => response)
}
