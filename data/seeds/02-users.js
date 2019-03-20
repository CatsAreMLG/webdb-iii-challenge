exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        { name: 'Josh', cohort_id: 3 },
        { name: 'Jose', cohort_id: 2 },
        { name: 'Ori', cohort_id: 3 }
      ])
    })
}
