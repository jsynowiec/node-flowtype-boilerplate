/* eslint-disable no-param-reassign */
import awilix from 'awilix';

const register = (server, options, next) => {
  const container = awilix.createContainer();

  server.app.container = container;
  next();
};

register.attributes = { name: 'container', version: '1.0.0' };

export default [{
  plugin: {
    register,
  },
}];
