const express = require('express')
const helmet = require('helmet')
const knex = require('knex')

const CohortsRouter = require('./data/routers/cohortsRouter')
// const UsersRouter = require('./data/routers/usersRouter.js')
const knexConfig = require('./knexfile')

const db = knex(knexConfig.development)
const server = express()
server.use(helmet())
server.use(express.json())
server.use('/api/cohorts', CohortsRouter)
// server.use('/api/users', UsersRouter)

server.get('/api', async (req, res) => {
  res.send('<h2>Welcome to the API</h2>')
})

const PORT = 9090
server.listen(PORT, _ => console.log(`listening on port ${PORT}`))
