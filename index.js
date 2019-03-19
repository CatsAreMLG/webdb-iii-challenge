const express = require('express')
const helmet = require('helmet')
const knex = require('knex')

const knexConfig = require('./knexfile')

const db = knex(knexConfig.development)
const server = express()
server.use(helmet())
server.use(express.json())

const PORT = 9090

server.listen(PORT, (req, res) => {
  console.log(`listening on port ${PORT}`)
})
