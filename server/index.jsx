const express = require('express')
const next = require('next')
const compression = require('compression')
const bodyParser = require('body-parser')

const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()
const shotRoutes = require('./routes/shot.jsx')
const playerRoutes = require('./routes/players.jsx')
const teamRoutes = require('./routes/teams.jsx')

app.prepare()
   .then(() => {
     const server = express()
     server.use(compression())
     server.use(bodyParser.json())

     server.use('/api/shot', shotRoutes)
     server.use('/api/players', playerRoutes)
     server.use('/api/teams', teamRoutes)
     server.get('*', (req, res) => {
       return handle(req, res)
     })

     const PORT = 3000

     server.listen(PORT, err => {
       if (err) throw err
        console.log(`Server hosted on: http://localhost:${PORT}`)
     })
   })
   .catch((ex) => {
     console.log(ex.stack)
     process.exit(1)
   })
