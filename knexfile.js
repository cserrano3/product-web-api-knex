

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'products',
      user: 'postgres',
      password: '123',
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'products',
      user: 'postgres',
      password: 123,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'products',
      user: 'postgres',
      password: 123,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};
