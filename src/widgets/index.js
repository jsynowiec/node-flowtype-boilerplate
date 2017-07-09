const pkg = {};

export function register (server, options, next) {
    server.route({
      method: 'GET',
      path: '/widgets',
      handler: (request, reply) => {
        return reply(pkg);
      }
   });

   server.route({
      method: 'GET',
      path: '/widgets/:id',
      handler: (request, reply) => {
        return reply(pkg);
      }
   });

   server.route({
      method: 'DELETE',
      path: '/widgets',
      handler: (request, reply) => {
        return reply(pkg);
      }
   });

   server.route({
      method: 'POST',
      path: '/widgets',
      handler: (request, reply) => {
        return reply(pkg);
      }
   });

    server.route({
      method: 'PUT',
      path: '/widgets/:id',
      handler: (request, reply) => {
        return reply(pkg);
      }
   });

   next();
};

exports.register.attributes = require('./package.json');