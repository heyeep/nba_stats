import React from 'react'
import Head from 'next/head'
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import ScatterChart from './ScatterChart'

import { getShotDataPoints } from '../helpers/util'

class ShotChart extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { title, shots } = this.props
    console.log(shots)
    return shots && (
      <>
        <div className="shotchart-page" style={{"height" : "700px", "width" : "700px"}}>
          <ParentSize>
            {
              ({ width, height }) =>
              <ScatterChart width={width}
                            height={height}
                            points={getShotDataPoints(shots)}
              />
            }
          </ParentSize>,
        </div>
      </>
    )
  }
}

export default ShotChart
