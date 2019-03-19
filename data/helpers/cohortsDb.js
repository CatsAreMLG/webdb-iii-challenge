const db = require('../../dbConfig')
const TABLE = 'cohorts'

module.exports = {
  get,
  insert
}

function get(id) {
  if (id)
    return db(TABLE)
      .where({ id })
      .first()
  else return db(TABLE)
}

function insert(cohort) {
  return db(TABLE)
    .insert(cohort)
    .then(ids => {
      return get(ids[0])
    })
}
