const pkg = require('./package.json');

export function register (server, options, next) {
    server.route({
      method: 'GET',
      path: '/health',
      config: {
        auth: false,
        tags: ['api'],
        handler: (request, reply) => {
          return reply(pkg);
        }
      }
   });
   next();
};

exports.register.attributes = pkg;