// Update with your config settings.

module.exports = {
  development: {
    client: "mysql",
    connection: {
      database: "database",
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
    },
  },

  production: {
    client: "mysql",
    connection: {
      database: "database",
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
    },
  },
};
