// Data from shotchartdetail is an array of arrays.
// This functions labels each element in that array.
export const getShotDataPoints = (set) => {
  let shots = []
  for (let row = 0; row < set.length; row++) {
    let shot = {
      gridType: set[row][0],
      gameId: set[row][1],
      gameEventId: set[row][2],
      playerId: set[row][3],
      playerName: set[row][4],
      teamId: set[row][5],
      teamName: set[row][6],
      period: set[row][7],
      minutesRemaining: set[row][8],
      secondsRemaining: set[row][9],
      eventType: set[row][10],
      actionType: set[row][11],
      shotType: set[row][12],
      shotZoneBasic: set[row][13],
      shotZoneArea: set[row][14],
      shotZoneRange: set[row][15],
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
