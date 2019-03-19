const express = require('express')
const helmet = require('helmet')
const knex = require('knex')

const knexConfig = require('./knexfile')

const db = knex(knexConfig.development)
const server = express()
server.use(helmet())
server.use(express.json())

server.get('/api/cohorts', async (req, res) => {
  try {
    const cohorts = await db('cohorts')
    res.json(cohorts)
  } catch (error) {
    res.json(error)
  }
})

const PORT = 9090
server.listen(PORT, _ => console.log(`listening on port ${PORT}`))
