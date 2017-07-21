/* eslint-disable no-console, no-param-reassign */

const mototaxi = require('mototaxi');
const domain = require('../../domain');

export function register(server, options, next) {
  const config = {
    logger: { log: (message) => { console.log(`mototaxi: ${message}`); } },
    commandHandlers: domain.commandHandlers,
  };
  const dispatcher = mototaxi.getDispatcher(config);
  server.app.dispatcher = dispatcher;

  next();
}

exports.register.attributes = { name: 'mototaxi', version: '1.0.0' };
