// Data from shotchartdetail is an array of arrays.
// This functions labels each element in that array.
export const shotsToJson = (set) => {
  let shots = []
  for (let row = 0; row < set.length; row++) {
    let shot = {
      gridType: set[row][0],
      gameId: set[row][1],
      gameEventId: set[row][2],
      playerId: set[row][3],
      teamId: set[row][4],
      teamName: set[row][5],
      period: set[row][6],
      minutesRemaining: set[row][7],
      secondsRemaining: set[row][8],
      eventType: set[row][9],
      actionType: set[row][10],
      shotType: set[row][11],
      shotZoneBasic: set[row][12],
      shotZoneArea: set[row][13],
      shotZoneRange: set[row][14],
      shotDistance: set[row][16],
      locX: set[row][17],
      locY: set[row][18],
      shotAttemptedFlag: set[row][19],
      shotMadeFlag: set[row][20],
      gameDate: set[row][21],
      HTM: set[row][22],
      VTM: set[row][23],
    }
    shots.push(shot)
  }
  return shots
}

export const getDataPoints = (shots) => {
  let points = []
  shots.forEach(shot => {
    const point = {x: shot.locX, y: shot.locY, z: 0}
    points.push(point)
  })
  return points
}
