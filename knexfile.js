// Update with your config settings.

module.exports = {
  development: {
    client: "mysql2",
    connection: {
      database: "node-api",
      user: "root",
      password: "",
      charset: "utf8",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./db/migrations",
      tableName: "knex_migrations",
    },
    seeds: {
      directory: "./db/seeds",
      tableName: "knex_seeds",
    },
  },

  production: {
    client: "mysql2",
    connection: {
      database: "node-api",
      user: "username",
      password: "password",
      charset: "utf8",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./db/migrations",
      tableName: "knex_migrations",
    },
    seeds: {
      directory: "./db/seeds",
      tableName: "knex_seeds",
    },
  },
};
