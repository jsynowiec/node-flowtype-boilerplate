/* eslint-disable no-param-reassign */
import db from '../../models';

const register = (server, options, next) => {
  Object.keys(db).filter((key) => key.toLowerCase() !== 'sequelize').forEach((model) => {
    server.app.container.registerValue(`${model.toLowerCase()}Model`, db[model]);
  });

  next();
};

register.attributes = { name: 'database-registration', version: '1.0.0' };

export default [{
  plugin: {
    register,
    dependencies: 'container',
  },
}];
