import React from 'react'
import Head from 'next/head'
import { VictoryChart, VictoryTheme, VictoryScatter, VictoryAxis } from 'victory'
import ParentSize from '@visx/responsive/lib/components/ParentSize';

import ScatterChart from './ScatterChart'
import { getShots } from '../actions'
import { shotsToJson, getDataPoints} from '../helpers/util'

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
                            points={getDataPoints(shots)}/>}
          </ParentSize>,
        </div>
      </>
    )
  }
}

export default ShotChart
