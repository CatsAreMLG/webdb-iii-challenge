const db = require('../../dbConfig')
const TABLE = 'cohorts'

module.exports = {
  get
}

function get() {
  return db(TABLE)
}
