/* eslint-disable no-param-reassign */
import { Lifetime } from 'awilix';

const register = (server, options, next) => {
  server.app.container.loadModules([`${__dirname}/../../domain/command-handlers/*.js`], {
    formatName: (name, descriptor) => `${descriptor.value.name}Handler`,
    registrationOptions: {
      lifetime: Lifetime.SINGLETON,
    },
  });

  next();
};

register.attributes = { name: 'handler-registration', version: '1.0.0' };

export default [{
  plugin: {
    register,
    dependencies: 'container',
  },
}];
