import { Lifetime } from 'awilix';

require('dotenv').config();

const register = (server, options, next) => {
  if (process.env.FAKES) {
    server.app.container.loadModules([`${__dirname}/../../data/repositories/*.fake.js`], {
      formatName: (name) => {
        const fileName = name.replace('.fake', '');
        return `${fileName.toLowerCase()}Repository`;
      },
      registrationOptions: {
        lifetime: Lifetime.SINGLETON,
      },
    });
  }
  next();
};

register.attributes = {
  name: 'fakes',
  version: '1.0.0',
};

export default [{
  plugin: {
    register,
    dependencies: ['repository-registration'],
  },
}];
