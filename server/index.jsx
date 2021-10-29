const express = require('express')
const next = require('next')
const routes = require('../routes.jsx')
const compression = require('compression')
const bodyParser = require('body-parser')

const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = routes.getRequestHandler(app)
const shotRoutes = require('./routes/shot.jsx')

app.prepare()
   .then(() => {
     const server = express()
     server.use(compression())
     server.use(bodyParser.json())

     server.use('/api/shot', shotRoutes)
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