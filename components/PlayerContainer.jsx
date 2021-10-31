import React from 'react'
import Head from 'next/head'
import PlayerSearch from './PlayerSearch'
import { Container, Row, Col } from 'reactstrap'
import { getPlayers } from '../actions'
import { getPlayerListOptions } from '../helpers/util'

class PlayerContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      players: []
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
    console.log(this.state.players)
  }

  render() {
    const { players} = this.state
    return (
      <>
        <Head>
          <title>Players</title>
        </Head>
        <Container>
          <PlayerSearch players={getPlayerListOptions(players)}/>
        </Container>
      </>
    )
  }
}

export default PlayerContainer
