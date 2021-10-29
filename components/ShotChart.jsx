import React from 'react'
import Head from 'next/head'
import { getShots } from '../actions'

class ShotChart extends React.Component {
  constructor(props) {
    super(props)
  }
  async componentDidMount() {
    try {
      const response = await getShots()
      if (response.status === 200) {
        console.log(response)
      }
    } catch (err) {
      console.error(err)
    }
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
