import React from 'react'
import Head from 'next/head'
import PlayerSearch from './PlayerSearch'
import PlayerSeason from './PlayerSeason.jsx'
import ShotChart from '../components/ShotChart'
import { Container, Row, Col } from 'reactstrap'
import { getPlayers, getPlayer, getShots } from '../actions'
import { getPlayerListOptions, getPlayerSeasonOptions } from '../helpers/util'

class PlayerContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      players: [],
      player: {},
      season: 0,
      playerStats: {},
      playerShots: [],
      playerSeasons: [],
      isLoading: false
    }
  }

  handleChangePlayer = (player) => {
    if ((typeof(player) !== 'undefined') && (player !== null)) {
      this.setState({player})
      this.getPlayerData(player.id)
    }
  }

  handleChangeSeason = (season) => {
    this.setState({season})
    this.getShotData(this.state.player.id, this.state.season)

  }

  async componentDidMount() {
    try {
      this.setState({isLoading: true})
      const response = await getPlayers()
      if (response.status === 200) {
        const { players } = response.data
        this.setState({players})
        this.setState({isLoading: false})
      }
    } catch (err) {
      this.setState({isLoading: false})
      console.error(err)
    }
  }

  async getPlayerData(playerId) {
    try {
      const response = await getPlayer(playerId)
      if (response.status === 200) {
        const { playerStats } = response.data
        this.setState({playerStats})
        this.getSeasons(playerStats)
        this.getShotData(playerId, this.state.season)
      }
    } catch (err) {
      console.error(err)
    }
  }

  async getShotData(playerId, season) {
    try {
      const response = await getShots(playerId, season)
      if (response.status === 200) {
        const rows = response.data.resultSets[0].rowSet
        this.setState({playerShots: rows})
      }
    } catch (err) {
      console.error(err)
    }
  }

  getSeasons(playerStats) {
    const { season } = playerStats.regularSeason
    const playerSeasons = season.map(year => year.seasonYear)
    this.setState({playerSeasons, season: Math.max(...playerSeasons)})
  }

  getPlayerImage() {
    const { player } = this.state
    return (
      <img src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.id}.png`}
           alt="No Image"
      />
    )
  }

  render() {
    const {
      players,
      player,
      playerStats,
      playerShots,
      playerSeasons,
      isLoading
    } = this.state
    return (
      <>
        <Head>
          <title>Players</title>
        </Head>
        <Container>
          { !isLoading &&
              <Row>
                <Col>
                  <PlayerSearch players={getPlayerListOptions(players)}
                                changePlayer={this.handleChangePlayer} />
                  {
                    player &&
                      <>
                        <PlayerSeason seasons={getPlayerSeasonOptions(playerSeasons)}
                                      changeSeason={this.handleChangeSeason} />
                        {this.getPlayerImage()}
                      </>
                  }
                </Col>
                <Col>
                  {
                    <ShotChart shots={playerShots} />
                  }
                </Col>
              </Row>
          }
        </Container>
      </>
    )
  }
}

export default PlayerContainer
