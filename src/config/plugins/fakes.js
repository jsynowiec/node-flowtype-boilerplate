import { Lifetime } from 'awilix';

export function register(server, options, next) {
  server.app.container.loadModules([`${__dirname}/../../data/repositories/*.fake.js`], {
    formatName: (name) => {
      const fileName = name.replace('.fake', '');
      return `${fileName.toLowerCase()}Repository`;
    },
    registrationOptions: {
      lifetime: Lifetime.SINGLETON,
    },
  });
  next();
}

exports.register.attributes = { name: 'fakes', version: '1.0.0' };
