/* eslint-disable no-console, no-param-reassign */
import awilix, { Lifetime } from 'awilix';
import db from '../../models';

export function register(server, options, next) {
  const container = awilix.createContainer();

  Object.keys(db).filter((key) => key.toLowerCase() !== 'sequelize').forEach((model) => {
    container.registerValue(`${model.toLowerCase()}Model`, db[model]);
  });

  container.loadModules([`${__dirname}/../../domain/command-handlers/*.js`], {
    formatName: (name, descriptor) => `${descriptor.value.name}Handler`,
    registrationOptions: {
      lifetime: Lifetime.SINGLETON,
    },
  });

  container.loadModules([`${__dirname}/../../data/repositories/*.repository.js`], {
    formatName: (name) => {
      const fileName = name.replace('.repository', '');
      return `${fileName.toLowerCase()}Repository`;
    },
    registrationOptions: {
      lifetime: Lifetime.SINGLETON,
    },
  });

  server.app.container = container;
  next();
}

exports.register.attributes = { name: 'container', version: '1.0.0' };
