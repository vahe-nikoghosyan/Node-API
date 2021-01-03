exports.up = knex => {
  return knex.schema
    .createTable('users', table => {
      table.increments('id').primary()

      table.integer('parentId').unsigned().references('id').inTable('users').onDelete('SET NULL').index()

      table.string('firstName')
      table.string('lastName')
      table.integer('age')
      table.json('address')
    })
    .createTable('movies', table => {
      table.increments('id').primary()
      table.string('name')
    })
    .createTable('users_movies', table => {
      table.increments('id').primary()

      table.integer('personId').unsigned().references('id').inTable('users').onDelete('CASCADE').index()

      table.integer('movieId').unsigned().references('id').inTable('movies').onDelete('CASCADE').index()
    })
}

exports.down = knex => {
  return knex.schema.dropTableIfExists('users_movies').dropTableIfExists('movies').dropTableIfExists('users')
}
