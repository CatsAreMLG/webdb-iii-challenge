const db = require('../../dbConfig')

module.exports = {
  get,
  // findStudents,
  insert,
  update,
  remove
}

function get(id) {
  if (id)
    return db('users')
      .where({ id })
      .first()
  else return db('users')
}

// function findStudents(id) {
//   return db('users')
//     .innerJoin('users', function() {
//       this.on('cohorts.id', '=', 'users.cohort_id')
//     })
//     .where({ cohort_id: id })
// }

function insert(name) {
  return db('users')
    .insert(name)
    .then(ids => get(ids[0]))
}

function update(id, changes) {
  return db('users')
    .where({ id })
    .update(changes)
}

function remove(id) {
  return db('users')
    .where({ id })
    .del()
}
