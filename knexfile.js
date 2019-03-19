// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './cohorts.sqlite3'
    },
    useNullAsDefault: true
  }
}
