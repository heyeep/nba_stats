import React from 'react'
import Head from 'next/head'
import { getShots } from '../actions'

import {shotsToJson} from '../helpers/util'

class ShotChart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      shots: []
    }
  }
  async componentDidMount() {
    try {
      const response = await getShots()
      if (response.status === 200) {
        const rows = response.data.resultSets[0].rowSet
        this.setState({shots: shotsToJson(rows)})
      }
    } catch (err) {
      console.error(err)
    }
    console.log(this.state.shots)
  }

  render() {
    const { className, children, title, headerType } = this.props
    return (
      <>
        <Head>
          <title>{title}</title>
        </Head>
        <div className="shotchart-page">
          <main className={`cover ${className}`}>
          </main>
        </div>
      </>
    )
  }
}

export default ShotChart
