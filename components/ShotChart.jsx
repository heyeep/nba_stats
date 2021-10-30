import React from 'react'
import Head from 'next/head'
import ParentSize from '@visx/responsive/lib/components/ParentSize';

import ScatterChart from './ScatterChart'
import { getShots } from '../actions'
import { getShotDataPoints } from '../helpers/util'

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
        this.setState({shots: getShotDataPoints(rows)})
      }
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    const { className, children, title, headerType } = this.props
    const { shots } = this.state
    return (
      <>
        <Head>
          <title>{title}</title>
        </Head>
        <div className="shotchart-page" style={{"height" : "700px", "width" : "700px"}}>
          <ParentSize>{({ width, height }) =>
              <ScatterChart width={width}
                            height={height}
                            points={shots}/>}
          </ParentSize>,
        </div>
      </>
    )
  }
}

export default ShotChart
