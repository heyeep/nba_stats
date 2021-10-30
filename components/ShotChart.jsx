import React from 'react'
import Head from 'next/head'
import { VictoryChart, VictoryTheme, VictoryScatter, VictoryAxis } from 'victory'

import { getShots } from '../actions'
import { shotsToJson, getDataPoints } from '../helpers/util'

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
        <div className="shotchart-page">
              <VictoryChart
                theme={VictoryTheme.material}
                domain={{ x: [0, 550], y: [0, 550] }}
              >
                <VictoryScatter
                  style={{
                    data: {
                      fill: "#AA1111",
                      opacity: 0.3
                    }
                  }}
                  size={2}
                  data={getDataPoints(shots)}
                />

                <VictoryAxis crossAxis
             //                tickValues={[1]}
                             tickFormat={(x) => (``)}
                />
                <VictoryAxis dependentAxis
                //             tickValues={[1]}
                             tickFormat={(x) => (``)}
                />
              </VictoryChart>
          <main className={`cover ${className}`}>
          </main>
        </div>
      </>
    )
  }
}

export default ShotChart
