import React from 'react'
import Head from 'next/head'
import { Container, Row, Col } from 'reactstrap'
import ShotChart from '../components/ShotChart'
import PlayerContainer from '../components/PlayerContainer'

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <PlayerContainer />
          </Col>
          <Col>
            <ShotChart />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Home
