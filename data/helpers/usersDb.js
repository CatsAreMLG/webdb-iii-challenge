const db = require('../../dbConfig')

module.exports = {
  get,
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

function insert(name) {
  return db('users')
    .insert(name)
    .then(ids => get(ids[0]))
}

function update(id, changes) {
  return db('users')
    .where({ id })
    .update(changes)
    .then(_ => {
      return get(id)
    })
}

function remove(id) {
  return db('users')
    .where({ id })
    .del()
}
