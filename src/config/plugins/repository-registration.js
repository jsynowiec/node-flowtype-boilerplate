/* eslint-disable no-param-reassign */
import { Lifetime } from 'awilix';

const register = (server, options, next) => {
  server.app.container.loadModules([`${__dirname}/../../data/repositories/*.repository.js`], {
    formatName: (name) => `${name.toLowerCase()}Repository`,
    registrationOptions: {
      lifetime: Lifetime.SINGLETON,
    },
  });

  next();
};

register.attributes = { name: 'repository-registration', version: '1.0.0' };

export default [{
  plugin: {
    register,
    dependencies: ['container', 'database-registration'],
  },
}];
