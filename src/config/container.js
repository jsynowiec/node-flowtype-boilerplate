import awilix, { Lifetime } from 'awilix';
import db from '../models';

const container = awilix.createContainer();

Object.keys(db).filter((key) => key.toLowerCase() !== 'sequelize').forEach((model) => {
  container.registerValue(`${model.toLowerCase()}Model`, db[model]);
});

container.loadModules([`${__dirname}/../domain/command-handlers/*.js`], {
  formatName: (name, descriptor) => `${descriptor.value.name}Handler`,
  registrationOptions: {
    lifetime: Lifetime.SINGLETON,
  },
});

container.loadModules([`${__dirname}/../data/repositories/*.js`], {
  formatName: (name) => `${name.toLowerCase()}Repository`,
  registrationOptions: {
    lifetime: Lifetime.SINGLETON,
  },
});

export default container;
