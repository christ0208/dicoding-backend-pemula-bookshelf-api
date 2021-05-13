import dotenv from 'dotenv';
import Hapi from '@hapi/hapi';
import routes from './routes/api';

dotenv.config();

/**
 * Start Hapi Framework Server.
 *
 * @returns {Promise<void>}
 */
const startServer = async () => {
  const server = Hapi.server({
    port: process.env.NODE_ENV === 'production' ? 80 : 8000,
    host: process.env.NODE_ENV === 'production' ? '0.0.0.0' : 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server started at ${server.info.uri}`);
};

startServer();
