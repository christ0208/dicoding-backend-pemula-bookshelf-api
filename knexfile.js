// Update with your config settings.
import database from './config/database';

export default {
  development: {
    client: database.type,
    connection: {
      host: database.host,
      port: database.port,
      database: database.name,
      user: database.username,
      password: database.password,
    },
  },
  staging: {
    client: database.type,
    connection: {
      host: database.host,
      port: database.port,
      database: database.name,
      user: database.username,
      password: database.password,
    },
    pool: {
      min: database.poolMin,
      max: database.poolMax,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
  production: {
    client: database.type,
    connection: {
      host: database.host,
      port: database.port,
      database: database.name,
      user: database.username,
      password: database.password,
    },
    pool: {
      min: database.poolMin,
      max: database.poolMax,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};
