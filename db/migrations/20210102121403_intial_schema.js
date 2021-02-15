exports.up = knex => {
  return knex.schema
    .createTable("users", table => {
      table.increments("id").primary();

      table.string("firstName").nullable();
      table.string("lastName").nullable();
      table.string("avatar_url").nullable();
      table.json("address");
    })
    .createTable("movies", table => {
      table.increments("id").primary();
      table.string("name");
    })
    .createTable("users_movies", table => {
      table.increments("id").primary();

      table.integer("personId").unsigned().references("id").inTable("users").onDelete("CASCADE").index();

      table.integer("movieId").unsigned().references("id").inTable("movies").onDelete("CASCADE").index();
    });
};

exports.down = knex => {
  return knex.schema.dropTableIfExists("users_movies").dropTableIfExists("movies").dropTableIfExists("users");
};
