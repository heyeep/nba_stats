import React from 'react'
import Head from 'next/head'
import { Container, Row, Col } from 'reactstrap'
import ShotChart from '../components/ShotChart'

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Container>
        <ShotChart />
      </Container>
    )
  }
}

export default Home
