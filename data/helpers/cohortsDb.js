const db = require('../../dbConfig')

module.exports = {
  get,
  findStudents,
  insert,
  update,
  remove
}

function get(id) {
  if (id)
    return db('cohorts')
      .where({ id })
      .first()
  else return db('cohorts')
}

function findStudents(id) {
  return db('cohorts')
    .innerJoin('users', function() {
      this.on('cohorts.id', '=', 'users.cohort_id')
    })
    .where({ cohort_id: id })
}

function insert(name) {
  return db('cohorts')
    .insert(name)
    .then(ids => get(ids[0]))
}

function update(id, changes) {
  return db('cohorts')
    .where({ id })
    .update(changes)
}

function remove(id) {
  return db('cohorts')
    .where({ id })
    .del()
}
