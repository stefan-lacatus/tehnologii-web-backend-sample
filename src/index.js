// Import the fastify library
import Fastify from 'fastify';

// Import the file that contains all the routes
import { routes } from './routes/blogs.js';

// Create a new fastify instance
const fastify = Fastify({ logger: true });

// Example of setting up a very simple route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' };
});

// Register routes to handle blog posts
routes.forEach((route) => {
  fastify.route(route);
});

/**
 * Run the server!
 */
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
