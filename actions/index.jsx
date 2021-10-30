import axios from 'axios'

export const getShots = async (req) => {
  return await axios.get('/api/shots')
    .then(response => response)
}

export const getPlayers = async (req) => {
  return await axios.get('/api/players')
    .then(response => response)
}
