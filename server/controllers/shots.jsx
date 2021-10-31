const axios = require('axios')
const getHeaders = () => {
  return {
    headers: {
      'Host': 'stats.nba.com',
      'Connection': 'keep-alive',
      'Accept': 'application/json, text/plain, */*',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36',
      'Referer': 'https://stats.nba.com/',
      'Referrer-Policy': "strict-origin-when-cross-origin",
      'x-nba-stats-origin': 'stats',
      'x-nba-stats-token': 'true',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'en-US,en;q=0.9',
    }
  }
}

exports.getShots = async (req, res) => {
  const { player } = req.query
  console.log(req.query)
 const shots = await axios.get(`https://stats.nba.com/stats/shotchartdetail?\
ContextMeasure=FGA&LastNGames=0&LeagueID=00&Month=0&OpponentTeamID=0&Period=0&\
PlayerID=${player}&SeasonType=Regular%20Season&TeamID=0&VsDivision=&VsConference=&\
SeasonSegment=&Season=2018-19&RookieYear=&PlayerPosition=&Outcome=&Location=&\
GameSegment=&GameId=&DateTo=&DateFrom=`, getHeaders())
                           .then(response => res.status(200).json(response.data))
                           .catch(err => res.status(442).send(err))
}
