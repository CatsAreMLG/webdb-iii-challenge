const db = require('../../dbConfig')
const TABLE = 'cohorts'

module.exports = {
  get
}

function get(id) {
  if (id)
    return db(TABLE)
      .where({ id })
      .first()
  else return db(TABLE)
}
