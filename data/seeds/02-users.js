exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        { name: 'Josh' },
        { name: 'Jose' },
        { name: 'Ori' }
      ])
    })
}
