/* eslint-disable no-param-reassign, no-console */
const models = require('./models');

const Glue = require('glue');
const manifest = require('./config');
const Pack = require('./package.json');

const options = {
  relativeTo: __dirname,
};

Glue.compose(manifest, options, (err, server) => {
  if (err) {
    throw err;
  }

  models.sequelize.sync().then(() => {
    server.start(() => {
      console.log(`✅  ${Pack.name} started.`);
    });
  });
});
