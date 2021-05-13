import dotenv from 'dotenv';

dotenv.config();

/**
 * Configurations for SQL database connection.
 */
export default {
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  name: process.env.DB_NAME,
  poolMin: process.env.DB_POOL_MIN,
  poolMax: process.env.DB_POOL_MAX,
};
