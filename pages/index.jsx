import React from 'react'
import Head from 'next/head'
import PlayerContainer from '../components/PlayerContainer'

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <PlayerContainer />
    )
  }
}

export default Home
