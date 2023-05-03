const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');

const routes = require('./routes')
const server = new Hapi.Server({
    port: 3000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
  routes: {
    cors: {
      origin: ['*'],
    },
  },
});

const start = async () => {

    await server.register(Inert);

    server.route(routes);
    
    await server.start();

    console.log('Server running at:', server.info.uri);
};

start();