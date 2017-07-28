const pkg = require('./package.json');

export function register(server, options, next) {
  server.route({
    method: 'GET',
    path: '/status',
    config: {
      auth: false,
      tags: ['api'],
      handler: (request, reply) => {
        reply(pkg);
      },
    },
  });
  next();
}

exports.register.attributes = pkg;
