const db = require('../../dbConfig')
const TABLE = 'cohorts'

module.exports = {
  get,
  findStudents,
  insert,
  update,
  remove
}

function get(id) {
  if (id)
    return db(TABLE)
      .where({ id })
      .first()
  else return db(TABLE)
}

function findStudents(id) {
  return db(TABLE)
    .innerJoin('users', function() {
      this.on('cohorts.id', '=', 'users.cohort_id')
    })
    .where({ cohort_id: id })
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

function remove(id) {
  return db(TABLE)
    .where({ id })
    .del()
}
