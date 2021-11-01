import React from 'react'
import Head from 'next/head'
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import LineChart from './LineChart'

import { getStatDataPoints } from '../helpers/util'

class StatChart extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { title, stats, seasons } = this.props
    return (
      <div className="" style={{"height" : "350px", "width" : "500px"}}>
        <ParentSize>
          {
            ({ width, height }) =>
              <LineChart width={width}
                         height={height}
                         stats={stats}
                         seasons={seasons}
              />
          }
        </ParentSize>
      </div>
    )
  }
}

export default StatChart
