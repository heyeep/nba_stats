import React from 'react'
import Head from 'next/head'
import PlayerSearch from './PlayerSearch'
import ShotChart from '../components/ShotChart'
import { Container, Row, Col } from 'reactstrap'
import { getPlayers, getPlayer, getShots } from '../actions'
import { getPlayerListOptions } from '../helpers/util'

class PlayerContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      players: [],
      player: {},
      playerStats: {},
      playerShots: [],
      playerSeasons: []
    }
  }

  handleChangePlayer = (player) => {
    if ((typeof(player) !== 'undefined') && (player !== null)) {
      this.setState({player})
      this.getPlayerData()
    }
  }

  async componentDidMount() {
    try {
      const response = await getPlayers()
      if (response.status === 200) {
        const { players } = response.data
        this.setState({players})
      }
    } catch (err) {
      console.error(err)
    }
  }

  async getPlayerData() {
    try {
      const { player } = this.state
      const response = await getPlayer(player.id)
      if (response.status === 200) {
        const { playerStats } = response.data
        this.setState({playerStats})
        this.getSeasons()
        this.getShotData()
      }
    } catch (err) {
      console.error(err)
    }
  }

  async getShotData() {
    try {
      const { player } = this.state
      const response = await getShots(player.id)
      if (response.status === 200) {
        const rows = response.data.resultSets[0].rowSet
        this.setState({playerShots: rows})
      }
    } catch (err) {
      console.error(err)
    }
  }

  getSeasons() {
    const { season } = this.state.playerStats.regularSeason
    const playerSeasons = season.map(year => year.seasonYear)
    this.setState({playerSeasons})
  }

  getPlayerImage() {
    const { player } = this.state
    return player && (
      <img src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.id}.png`}
      alt="No Image"
      />
    )
  }

  render() {
    const { players, player, playerStats, playerShots, playerSeasons } = this.state
    console.log(playerSeasons)
    return (
      <>
        <Head>
          <title>Players</title>
        </Head>
        <Container>
          <Row>
            <Col>
              <PlayerSearch players={getPlayerListOptions(players)}
                            changePlayer={this.handleChangePlayer} />
              {
                player &&
                  <>
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

        </Container>
      </>
    )
  }
}

export default PlayerContainer
