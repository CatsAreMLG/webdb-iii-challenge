const db = require('../../dbConfig')
const TABLE = 'cohorts'

module.exports = {
  get,
  insert,
  update
}

function get(id) {
  if (id)
    return db(TABLE)
      .where({ id })
      .first()
  else return db(TABLE)
}

function insert(name) {
  return db(TABLE)
    .insert(name)
    .then(ids => get(ids[0]))
}

function update(id, changes) {
  return db(TABLE)
    .where({ id })
    .update(changes)
}
